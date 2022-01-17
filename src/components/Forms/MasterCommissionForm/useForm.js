import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import emailjs from 'emailjs-com';


export function useForm(validateOnChange = false) {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('id' in fieldValues)
            temp.id = fieldValues.id ? "" : "This field is required."
        if ('newStkCommission' in fieldValues)
            temp.newStkCommission = fieldValues.newStkCommission ? "" : "This field is required."
        if ('newtOptCommission' in fieldValues)
            temp.newtOptCommission = fieldValues.newtOptCommission ? "" : "This field is required."
        if ('newIntrestCommission' in fieldValues)
            temp.newIntrestCommission = fieldValues.newIntrestCommission ? "" : "This field is required."

        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const initialFValues = {
        id:'',
        approve:'approved',
        newStkCommission: '',
        newtOptCommission: '',
        newIntrestCommission: '',
        date: new Date(),
        note: ''
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
        console.log(newRow)
        const newRowData = {
            "newStkCommission": newRow.newStkCommission,
            "newtOptCommission": newRow.newtOptCommission,
            "date": new Date().toLocaleDateString(),
            "newIntrestCommission": newRow.newIntrestCommission,
            "note": newRow.note,
            "status": newRow.approve,
        }
        const postingResponse = await axios.put("https://xnesdeskserver.herokuapp.com/api/commission/" +  newRow.id, { mode: 'cors', newRowData })
        // console.log(postingResponse)
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
            margin: theme.spacing(3)
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