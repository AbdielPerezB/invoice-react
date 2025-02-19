import { useEffect, useState } from "react";

export const FormItemsView = ({ handler }) => {
    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: ''
    })


    const { product, price, quantity } = formItemsState


    const onInputChange = ({ target: { name, value } }) => {
        setFormItemsState({
            ...formItemsState,
            [name]: value
        })
    }

    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault(); //Previene el comportamiento por default del evento submit de un form. tmb evita que se recargue la paágina
        //validamos el formulario
        if ((product.trim().length <= 1) ||
            (isNaN(price.trim())) ||
            (isNaN(quantity.trim())) ||
            (quantity.trim().length < 1)
        ) {
            alert('Datos mal formados')
            return;
        };
        handler(formItemsState);
        
        setFormItemsState({
            product: '',
            price: '',
            quantity: ''
        })
    }


    {/* <form className="w-50" onSubmit={event => { */ }
    <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
        <input
            type="text"
            name="product"
            placeholder="producto"
            className="form-control m-3"
            value={product}
            // onChange={event => ononInputChange(event)} /> Cuando se recibe y se pasa por argumento lo mismo (event en este caso) se puede simplificar, es lo mismo
            onChange={onInputChange} />

        <input
            type="text"
            name="price"
            placeholder="precio"
            className="form-control m-3"
            value={price}
            onChange={event => onInputChange(event)} />

        <input
            type="text"
            name="quantity"
            placeholder="cantidad"
            className="form-control m-3"
            value={quantity}
            onChange={onInputChange} />
        <button className="btn btn-primary ms-3">Agregar</button>
    </form>
};