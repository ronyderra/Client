import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import emailjs from 'emailjs-com';


export function useForm(validateOnChange = false) {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('submitter' in fieldValues)
            temp.submitter = fieldValues.submitter ? "" : "This field is required."
        if ('from' in fieldValues)
            temp.from = fieldValues.from ? "" : "This field is required."
        if ('to' in fieldValues)
            temp.to = fieldValues.to ? "" : "This field is required."
        if ('sheled' in fieldValues)
            temp.sheled = fieldValues.sheled ? "" : "This field is required."
        if ('accountNumber' in fieldValues)
            temp.accountNumber = fieldValues.accountNumber.length <= 6 && fieldValues.accountNumber !== '' ? "" : "account number is too long"
        if ('reason' in fieldValues)
            temp.reason = fieldValues.reason ? "" : "This field is required."
        if ('paperSent' in fieldValues)
            temp.paperSent = fieldValues.paperSent ? "" : "This field is required."
        if ('paperSigned' in fieldValues)
            temp.paperSigned = fieldValues.paperSigned ? "" : "This field is required."
        if ('accountOpend' in fieldValues)
            temp.accountOpend = fieldValues.accountOpend ? "" : "This field is required."
        if ('cashUpdated' in fieldValues)
            temp.cashUpdated = fieldValues.cashUpdated ? "" : "This field is required."
        if ('date' in fieldValues)
            temp.date = fieldValues.date ? "" : "This field is required."
        if ('stockstransferd' in fieldValues)
            temp.stockstransferd = fieldValues.stockstransferd ? "" : "This field is required."

        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const initialFValues = {
        submitter: '',
        from: '',
        to: '',
        sheled: '',
        accountNumber: '',
        reason: '',
        date: new Date(),
        paperSent: 'YES',
        paperSigned: 'NO',
        accountOpend: 'NO',
        cashUpdated: 'NO',
        stockstransferd:'NO'
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

    const checkAccountNumber = async (data) => {
        if (data === '') {
            alert('must fil laccount number data')
            return;
        }
        const response = await axios.get("https://xnesdeskserver.herokuapp.com/api/users/accountNumber", { params: { accountNumber: data } })
        if (response.data.length === 0) {
            alert('no data founf')
            return
        }
        alert(response.data[0].fullName + ' ' + response.data[0].unumber + ' ' + response.data[0].sheled)
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

    const setNewRow = async (newRow) => {
        const date = newRow.date.toLocaleTimeString(["he-US"], {
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        const newRowData = {
            "submitter": newRow.submitter,
            "accountNumber": newRow.accountNumber,
            "from": newRow.from,
            "to": newRow.to,
            "date": date,
            "sheled": newRow.sheled,
            "reason": newRow.reason,
            "paperSent": newRow.paperSent,
            "paperSigned": newRow.paperSigned,
            "accountOpend": newRow.accountOpend,
            "cashUpdated": newRow.cashUpdated,
            "stockstransferd": newRow.stockstransferd,
            "status": "pending"

        }
        const postingResponse = await axios.post("https://xnesdeskserver.herokuapp.com/api/tracking", { mode: 'cors', newRowData })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
        checkAccountNumber,
        sendEmail,
        setNewRow,
        validate
    }
}


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
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
