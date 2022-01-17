import React from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../controls/Controls";
import { useForm, Form } from './useForm';
import CardBody from "../../Card/CardBody.js";
import Card from "../../Card/Card.js";
import CardHeader from "../../Card/CardHeader.js";
import * as dataCollection from '../../../dataCollection/dataCollections'

export default function TrackingForm() {

    const { setNewRow, validate, checkAccountNumber, sendEmail, values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(true);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            setNewRow(values)
            resetForm()
        }
    }

    return (
        <Card>
            <CardHeader color="info">
                <h4 >Tracking Form </h4>
            </CardHeader>
            <CardBody>
                <Form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Controls.Select
                                name="submitter"
                                label="Submitter"
                                value={values.submitter}
                                onChange={handleInputChange}
                                options={dataCollection.getSubmiterCollection()}
                                error={errors.submitter}
                            />
                            <Controls.Input
                                label="Account Number"
                                name="accountNumber"
                                value={values.accountNumber}
                                onChange={handleInputChange}
                                error={errors.accountNumber}
                            />
                            <Controls.Select
                                name="from"
                                label="From"
                                value={values.from}
                                onChange={handleInputChange}
                                options={dataCollection.Systems()}
                                error={errors.from}
                            />
                            <Controls.Select
                                name="to"
                                label="To"
                                value={values.To}
                                onChange={handleInputChange}
                                options={dataCollection.Systems()}
                                error={errors.to}
                            />
                            <Controls.Select
                                name="sheled"
                                label="Sheled Change?"
                                value={values.sheled}
                                onChange={handleInputChange}
                                options={dataCollection.Files()}
                                error={errors.sheled}
                            />
                            <Controls.Select
                                name="stockstransferd"
                                label="Stocks Tranferd?"
                                value={values.stockstransferd}
                                onChange={handleInputChange}
                                options={dataCollection.Files()}
                                error={errors.stockstransferd}
                            />
                            </Grid>
                        <Grid item xs={6}>
                            <Controls.RadioGroup
                                name="paperSent"
                                label="Paper Sent?"
                                value={values.paperSent}
                                onChange={handleInputChange}
                                items={dataCollection.bool}
                            />
                            <Controls.RadioGroup
                                name="paperSigned"
                                label="Paper Signed?"
                                value={values.paperSigned}
                                onChange={handleInputChange}
                                items={dataCollection.bool}
                            />
                            <Controls.RadioGroup
                                name="accountOpend"
                                label="Account Oppend?"
                                value={values.accountOpend}
                                onChange={handleInputChange}
                                items={dataCollection.bool}
                            />
                            <Controls.RadioGroup
                                name="cashUpdated"
                                label="Cash Updated?"
                                value={values.cashUpdated}
                                onChange={handleInputChange}
                                items={dataCollection.bool}
                            />
                            <Controls.Select
                                name="reason"
                                label="Reason"
                                value={values.reason}
                                onChange={handleInputChange}
                                options={dataCollection.getTrackingReasonCollection()}
                                error={errors.reason}
                            />

                            <div>
                                <Controls.Button
                                    type="submit"
                                    text="Submit" />
                                <Controls.Button
                                    text="Reset"
                                    color="default"
                                    onClick={resetForm} />
                                <Controls.Button
                                    text="Check Account"
                                    color="default"
                                    onClick={() => checkAccountNumber(values.accountNumber)} />
                                <Controls.Button
                                    text="Send Email"
                                    color="default"
                                    onClick={sendEmail} />
                            </div>
                        </Grid>
                    </Grid>
                </Form>
            </CardBody>
        </Card>
    )
}

