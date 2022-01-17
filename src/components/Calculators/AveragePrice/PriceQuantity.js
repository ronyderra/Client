import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Input from "@material-ui/core/Input";
import './price.css';

export default class PriceQuantity extends React.Component {
    state = {
        price: 0.0,
        quantity: 0,
        totalPrice: 0.0
    };

    updateTotalPrice = () => {
        this.setState(state => ({ totalPrice: state.price * state.quantity }));
        this.setState(state => {
            const totalPrice = state.price * state.quantity;
            this.props.handleChange(this.props.index, totalPrice, state.quantity);
            return { totalPrice };
        })
    }

    handlePriceChange = event => {
        const value = event.target.value
        this.setState({ price: value || 0.0 });
        this.updateTotalPrice();
    }

    handleQuantityChange = event => {
        const value = parseInt(event.target.value, 0)
        this.setState({ quantity: value });
        this.updateTotalPrice();
    }

    render() {
        const removeButton = this.props.removeButton ? <button class="button-33" role="button" key-id={this.props.index} onClick={this.props.deleteRow}>delete</button> : '';
        return (
            <React.Fragment>
                <TableRow>
                    <TableCell>
                        <Input type="number" name="quantity" placeholder="Total shares"
                            onChange={this.handleQuantityChange} />
                    </TableCell>
                    <TableCell>
                        <Input type="number" name="price" placeholder="Price per share"
                            onChange={this.handlePriceChange} />
                    </TableCell>

                    <TableCell>
                        {`${this.state.totalPrice.toFixed(2)}`} 
                    </TableCell>
                    <TableCell>
                        {removeButton}
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }
}
