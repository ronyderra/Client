import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../controls/Controls";
import { useForm, Form } from './useForm';
import CardBody from "../../Card/CardBody.js";
import Card from "../../Card/Card.js";
import CardHeader from "../../Card/CardHeader.js";
import * as dataCollection from '../../../dataCollection/dataCollections'

export default function BuyingPowerForm() {

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
                <h4 >Commission Form</h4>
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
                                name="currentStkCommission"
                                label="Current Stock Comission Path"
                                value={values.currentStkCommission}
                                onChange={handleInputChange}
                                options={dataCollection.CommissionStkPath()}
                                error={errors.submitter}
                            />
                            <Controls.Select
                                name="currentOptCommission"
                                label="Current Option Comission Path"
                                value={values.currentOptCommission}
                                onChange={handleInputChange}
                                options={dataCollection.CommissionOptPath()}
                                error={errors.submitter}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Controls.RadioGroup
                                name="platform"
                                label="Platform"
                                value={values.platform}
                                onChange={handleInputChange}
                                items={dataCollection.ComPlatformItems}
                            />
                            <Controls.Select
                                name="commissionAmount"
                                label="Commissions Per Month"
                                value={values.commissionAmount}
                                onChange={handleInputChange}
                                options={dataCollection.CommissionRange()}
                                error={errors.commissionAmount}
                            />
                            <Controls.DatePicker
                                name="date"
                                label="Date"
                                value={values.date}
                                onChange={handleInputChange}
                            />
                            <Controls.Select
                                name="reason"
                                label="Reason"
                                value={values.reason}
                                onChange={handleInputChange}
                                options={dataCollection.getComReasonCollection()}
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
