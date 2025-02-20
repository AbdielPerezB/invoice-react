import { useEffect, useState } from "react";
import { calculateTotal, getInvoice } from "./services/getInvoice"
import { CLientView } from "./components/CLientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { LIstItemView } from "./components/ListItemView";
import { FormItemsView } from "./components/FormItemsView";

const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: []
}

export const InvoiceApp = () => {

    //agregamos un useState con los datos de la invoice (componente y parte principal)
    const [invoice, setInvoice] = useState(invoiceInitial);
    const [items, setItems] = useState([]); //al principio los items se inicializan vacios, se llenan la primera vez desde useEffect
    const [total, setTotal] = useState(0.0)
    const [idValue, setId] = useState(4) //Iniciamos en 4 porque esa es el id siguiente de nuestra db

    // const {id, name, client, company, items: initialItems } = getInvoice(); //versión sin useEffect
    const { id, name, client, company } = invoice //versión nueva ptimizada con useEffect

    useEffect(() => {
        const data = getInvoice()//obtenemos los datos del API
        console.log(data);
        setInvoice(data);//cambiamos el estado de la variable invoide con los nuevos datos que obtuvimos
        setItems(data.items);//llenamos los items con los nuevos datos que obtuvimos
    }, []);

    //actualizar el total con useEffect
    useEffect(() => {
        setTotal(calculateTotal(items))
    }, [items])

    const handlerAddInvoiceItems = ({ product, price, quantity }) => {

        setItems([...items, {
            id: idValue,
            product: product.trim(),
            price: parseFloat(price.trim()),
            quantity: parseInt(quantity.trim(), 10)
        }])

        setId(idValue + 1)
    }

    //Ocultar/mostrar form add product
    const [formActivated, setFormActivated] = useState(false);

    const onActiveForm = () => {
        setFormActivated(!formActivated)
    };

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Ejemplo de factura
                    </div>
                    <div className="card-body">

                        <InvoiceView id={id} name={name} />
                        <div className="row">
                            <div className="col mt-1">
                                <CLientView client={client} />
                            </div>
                            <div className="col mt-1">

                                <CompanyView company={company} />
                            </div>

                        </div>
                        <LIstItemView tittle="Productos de la factura"
                            items={items}
                            total={total} />
                        <button
                            className="btn btn-secondary"
                            onClick={onActiveForm}
                        >{!formActivated ? 'Agregar Item' : 'Ocultar formulario'}</button>
                        {/* {!formActivated ? '' : <FormItemsView handler={newItem => handlerAddInvoiceItems(newItem)} />} */}
                        {!formActivated || <FormItemsView handler={newItem => handlerAddInvoiceItems(newItem)} />}{/* newItem es el mismo objeto que formItemsState en FormItemsView  */}
                        {/* Las dos formas de arriba son lo mismo, a la de abajo se le conoce como operador terniario simplificado.
                        Se interpreta como: Si es falso -> imprime falso, es decir, no imprime nada.
                        Si es verdadera imprime <FormItemsView .../> */}
                    </div>
                </div>
            </div>
        </>
    )
}