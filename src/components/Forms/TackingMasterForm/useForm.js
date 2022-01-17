import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import emailjs from 'emailjs-com';


export function useForm(validateOnChange = false) {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('sheled' in fieldValues)
            temp.sheled = fieldValues.sheled ? "" : "This field is required."
        if ('paperSent' in fieldValues)
            temp.paperSent = fieldValues.paperSent ? "" : "This field is required."
        if ('paperSigned' in fieldValues)
            temp.paperSigned = fieldValues.paperSigned ? "" : "This field is required."
        if ('accountOpend' in fieldValues)
            temp.accountOpend = fieldValues.accountOpend ? "" : "This field is required."
        if ('cashUpdated' in fieldValues)
            temp.cashUpdated = fieldValues.cashUpdated ? "" : "This field is required."
        if ('stockstransferd' in fieldValues)
            temp.stockstransferd = fieldValues.stockstransferd ? "" : "This field is required."

        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const initialFValues = {
        id:'',
        sheled: '',
        paperSent: 'YES',
        paperSigned: 'YES',
        accountOpend: 'YES',
        cashUpdated: 'YES',
        stockstransferd: 'YES',
        status:'Done'
    }

    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }


    const sendEmail = async (data) => {
        const templateParams = {
            name: 'James',
            notes: 'Check this out!'
        };
        emailjs.send('service_5c900pt', 'template_2p4ul2z', templateParams, 'user_8YJctc3ysdZO5BEcxomeG')
            .then((response) => {
                alert('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    const updateRow = async (newRow) => {
        console.log(newRow)
        const newRowData = {
            "sheled": newRow.sheled,
            "paperSent": newRow.paperSent,
            "paperSigned": newRow.paperSigned,
            "accountOpend": newRow.accountOpend,
            "cashUpdated": newRow.cashUpdated,
            "stockTransferd": newRow.stockstransferd,
            "status": newRow.status,
        }
        const postingResponse = await axios.put("https://xnesdeskserver.herokuapp.com/api/tracking/" + newRow.id, { mode: 'cors', newRowData })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
        sendEmail,
        updateRow,
        validate
    }
}


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(2)
        }
    }
}))

export function Form(props) {

    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}
