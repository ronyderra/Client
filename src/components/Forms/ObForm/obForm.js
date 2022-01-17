import React from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../controls/Controls";
import { useForm, Form } from './useObForm';
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
                <h4 >Bloomberg and Oppenheimer Form </h4>
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
                                name="action"
                                label="Action"
                                value={values.action}
                                onChange={handleInputChange}
                                options={dataCollection.ObgetActionCollection()}
                                error={errors.action}
                            />
                            <Controls.Input
                                label="Quantity"
                                name="quantity"
                                value={values.quantity}
                                onChange={handleInputChange}
                                error={errors.quantity}
                            />
                            <Controls.Input
                                label="Symbol"
                                name="symbol"
                                value={values.symbol}
                                onChange={handleInputChange}
                                error={errors.symbol}

                            />
                            <Controls.Select
                                name="orderType"
                                label="Order Type"
                                value={values.orderType}
                                onChange={handleInputChange}
                                options={dataCollection.OrderType()}
                                error={errors.orderType}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Controls.Input
                                label="Limit Price/Execution Price"
                                name="limitPrice"
                                value={values.limitPrice}
                                onChange={handleInputChange}
                                error={errors.accountNumber}
                            />
                            <Controls.Select
                                name="country"
                                label="Country"
                                value={values.country}
                                onChange={handleInputChange}
                                options={dataCollection.getCountryCollection()}
                                error={errors.country}
                            />
                            <Controls.Select
                                name="status"
                                label="Status"
                                value={values.status}
                                onChange={handleInputChange}
                                options={dataCollection.Status()}
                                error={errors.status}
                            />
                            <Controls.RadioGroup
                                name="platform"
                                label="Platform"
                                value={values.platform}
                                onChange={handleInputChange}
                                items={dataCollection.ObplatformItems}
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
                                    text="Submit & Email" />
                                <Controls.Button
                                    text="Reset"
                                    color="default"
                                    onClick={resetForm} />
                                <Controls.Button
                                    text="Check Account"
                                    color="default"
                                    onClick={() => checkAccountNumber(values.accountNumber)} />
                                {/* <Controls.Button
                                    text="Send Email"
                                    color="default"
                                    onClick={() => sendEmail(values)} /> */}
                            </div>
                        </Grid>
                    </Grid>
                </Form>
            </CardBody>
        </Card>
    )
}

