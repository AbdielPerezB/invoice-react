import { getInvoice } from "../services/getInvoice"
import { CLientView } from "./CLientView";
import { CompanyView } from "./CompanyView";
import { InvoiceView } from "./InvoiceView";

export const InvoiceApp = () => {
    const { id, name, client, company, items } = getInvoice();
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