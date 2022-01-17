import React from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../controls/Controls";
import { useForm, Form } from './useForm';
import CardBody from "../../Card/CardBody.js";
import Card from "../../Card/Card.js";
import CardHeader from "../../Card/CardHeader.js";
import * as dataCollection from '../../../dataCollection/dataCollections'

export default function TrackingForm() {

    const { updateRow, validate, sendEmail, values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(true);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            updateRow(values)
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
                            <Controls.Input
                                label="ID"
                                name="id"
                                value={values.id}
                                onChange={handleInputChange}
                                error={errors.id}
                            />
                            <Controls.Select
                                name="sheled"
                                label="New Sheled"
                                value={values.sheled}
                                onChange={handleInputChange}
                                options={dataCollection.sheledCollection()}
                                error={errors.sheled}
                            />
                            <Controls.Select
                                name="status"
                                label="Status"
                                value={values.status}
                                onChange={handleInputChange}
                                options={dataCollection.Status()}
                                error={errors.status}
                            />
                            <Controls.DatePicker
                                name="date"
                                label="Date"
                                value={values.date}
                                onChange={handleInputChange}
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
                                    text="Send Email"
                                    color="default"
                                    onClick={sendEmail} />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                        <Controls.RadioGroup
                                name="paperSent"
                                label="Paper Sent?"
                                value={values.paperSent}
                                onChange={handleInputChange}
                                items={dataCollection.bool}
                            />
                            <Controls.Select
                                name="paperSigned"
                                label="Paper Signed?"
                                value={values.paperSigned}
                                onChange={handleInputChange}
                                options={dataCollection.Files()}
                            />
                            <Controls.Select
                                name="accountOpend"
                                label="Account Oppend?"
                                value={values.accountOpend}
                                onChange={handleInputChange}
                                options={dataCollection.Files()}
                            />
                            <Controls.Select
                                name="stockstransferd"
                                label="stocks transferd?"
                                value={values.stockstransferd}
                                onChange={handleInputChange}
                                options={dataCollection.Files()}
                            />
                            <Controls.Select
                                name="cashUpdated"
                                label="Cash Updated?"
                                value={values.cashUpdated}
                                onChange={handleInputChange}
                                options={dataCollection.Files()}
                            />

                        </Grid>
                    </Grid>
                </Form>
            </CardBody>
        </Card>
    )
}
