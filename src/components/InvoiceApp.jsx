import { getInvoice } from "../services/getInvoice"

export const InvoiceApp = () => {
    const { id, name, client, company, items } = getInvoice();
    const { city, country, number, street } = client.address;
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Ejemplo de factura
                    </div>
                    <div className="card-body">

                        <ul className="list-group">
                            <li className="list-group-item">Id: {id}</li>
                            <li className="list-group-item">Name {name}</li>
                        </ul>
                        <div className="row">
                            <div className="col mt-1">

                                <h3>Datos del cliente</h3>
                                <ul className="list-group">
                                    <li className="list-group-item active">{client.name} {client.lasName} </li>
                                    <li className="list-group-item">{street} {number}, {city}, {country}</li>
                                </ul>
                            </div>
                            <div className="col mt-1">

                                <h3>Datos de la empresa</h3>
                                <ul className="list-group">
                                    <li className="list-group-item active">{company.name}</li>
                                    <li className="list-group-item">Número Fiscal: {company.fiscalNumber}</li>

                                </ul>
                            </div>

                        </div>
                        <h3>Productos de la factura</h3>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    //desestructuramos item -> items.map(item => ()); to
                                    items.map(({ id, product, price, quantity }) => (
                                        <tr key={id} >
                                            <td>{product}</td>
                                            <td>{price}</td>
                                            <td>{quantity}</td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}