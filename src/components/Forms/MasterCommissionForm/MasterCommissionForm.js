import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../controls/Controls";
import { useForm, Form } from './useForm';
import CardBody from "../../Card/CardBody.js";
import Card from "../../Card/Card.js";
import CardHeader from "../../Card/CardHeader.js";
import * as dataCollection from '../../../dataCollection/dataCollections'

export default function MasterComForm() {

    const { setNewRow, validate, sendEmail, values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(true);

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
                <h4 >Commission Form</h4>
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
                                name="newStkCommission"
                                label="New Stock Comission Path"
                                value={values.newStkCommission}
                                onChange={handleInputChange}
                                options={dataCollection.CommissionStkPath()}
                                error={errors.newStkCommission}
                            />
                            <Controls.Select
                                name="newtOptCommission"
                                label="New Option Comission Path"
                                value={values.newtOptCommission}
                                onChange={handleInputChange}
                                options={dataCollection.CommissionOptPath()}
                                error={errors.newtOptCommission}
                            />
                            <Controls.Select
                                name="newIntrestCommission"
                                label="New Intrest Comission Path"
                                value={values.newIntrestCommission}
                                onChange={handleInputChange}
                                options={dataCollection.IntrestCommission()}
                                error={errors.newIntrestCommission}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Controls.RadioGroup
                                name="approve"
                                value={values.approve}
                                onChange={handleInputChange}
                                items={dataCollection.ApprovedformItems}
                            />
                            <Controls.DatePicker
                                name="date"
                                label="Date"
                                value={values.date}
                                onChange={handleInputChange}
                            />
                            <Controls.Select
                                name="note"
                                label="Notes"
                                value={values.note}
                                onChange={handleInputChange}
                                options={dataCollection.masterNotesCollection()}
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
                    </Grid>
                </Form>
            </CardBody>
        </Card>
    )
}