import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import emailjs from 'emailjs-com';


export function useForm(validateOnChange = false) {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('submitter' in fieldValues)
            temp.submitter = fieldValues.submitter ? "" : "This field is required."
        if ('action' in fieldValues)
            temp.action = fieldValues.action ? "" : "This field is required."
        if ('amount' in fieldValues)
            temp.amount = fieldValues.amount !== '$' ? "" : "This field is required."
        if ('accountNumber' in fieldValues)
            temp.accountNumber = fieldValues.accountNumber.length <= 6 && fieldValues.accountNumber !== '' ? "" : "account number is too long"
        if ('currency' in fieldValues)
            temp.currency = fieldValues.currency ? "" : "This field is required."

        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const initialFValues = {
        submitter: 'gal',
        action: '',
        amount: '$',
        accountNumber: '123456',
        platform: 'ib',
        date: new Date(),
        currency: 'USD',
        reason: 'שערוך שגוי'
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

        const response = await axios.get("https://xnesdeskserver.herokuapp.com/api/users/accountNumber", { params: { accountNumber: newRow.accountNumber } })
        if (response.data.length === 0) {
            alert('no data founf')
            return
        }
        const newRowData = {
            "submitter": newRow.submitter,
            "action": newRow.action,
            "amount": newRow.amount,
            "accountNumber": newRow.accountNumber,
            "date": date,
            "currency": newRow.currency,
            "platform": newRow.platform,
            "reason": newRow.reason,
            "fullName": response.data[0].fullName,
            "unumber": response.data[0].unumber,
            "sheled": response.data[0].sheled,
            "status": "pending"

        }
        const postingResponse = await axios.post("https://xnesdeskserver.herokuapp.com/api/buyingPowerList", { mode: 'cors', newRowData })
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

