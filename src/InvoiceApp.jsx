import { useState } from "react";
import { getInvoice } from "./services/getInvoice"
import { CLientView } from "./components/CLientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { LIstItemView } from "./components/ListItemView";

export const InvoiceApp = () => {
    const { total, id, name, client, company, items: initialItems } = getInvoice();

    //useState
    const [items, setItems] = useState(initialItems); //dentro del useState va el valor inicial
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('') //aunque el valor original es numerico lo dejamos en str para que aparezca vacio en el form del navegador
    const [quentity, setQuantity] = useState('');
    const [idValue, setId] = useState(4) //Iniciamos en 4 porque esa es el id siguiente de nuestra db

    const onProductChange = (event) => {
        setProduct(event.target.value)
    };
    const onPriceChange = (event) => {
        setPrice(event.target.value)
    };
    const onQuantityChange = (event) => {
        setQuantity(event.target.value)
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
                        <form className="w-50" onSubmit={event => {
                            event.preventDefault(); //Para que no se recargue la página al hacer clic

                            //validamos el formulario
                            if ((product.trim().length <= 1) ||
                                (isNaN(price.trim())) ||
                                (isNaN(quentity.trim())) ||
                                (quentity.trim().length < 1)
                            ) {
                                alert('Datos mal formados')
                                return;
                            }
                            setItems([...items, {
                                id: idValue,
                                product: product.trim(),
                                price: parseFloat(price.trim()),
                                quantity: parseInt(quentity.trim(), 10)
                            }])
                            setProduct('');
                            setPrice('');
                            setQuantity('');
                            setId(idValue + 1)
                            console.log(items)
                        }}>
                            <input
                                type="text"
                                name="product"
                                placeholder="producto"
                                className="form-control m-3"
                                value={product}
                                // onChange={event => onProductChange(event)} /> Cuando se recibe y se pasa por argumento lo mismo (event en este caso) se puede simplificar, es lo mismo
                                onChange={onProductChange} />

                            <input
                                type="text"
                                name="price"
                                placeholder="precio"
                                className="form-control m-3"
                                value={price}
                                onChange={event => onPriceChange(event)} />

                            <input
                                type="text"
                                name="quantity"
                                placeholder="cantidad"
                                className="form-control m-3"
                                value={quentity}
                                onChange={onQuantityChange} />
                            <button className="btn btn-primary ms-3">Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}