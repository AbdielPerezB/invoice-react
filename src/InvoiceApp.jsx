import { getInvoice } from "./services/getInvoice"
import { CLientView } from "./components/CLientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { LIstItemView } from "./components/ListItemView";

export const InvoiceApp = () => {
    const { total, id, name, client, company, items } = getInvoice();
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
                    </div>
                </div>
            </div>
        </>
    )
}