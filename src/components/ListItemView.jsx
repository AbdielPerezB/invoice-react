import PropTypes from "prop-types";
import { TotalView } from "./TotalView";
export const LIstItemView = ({ tittle, items, total, handleDeletItem}) => {
    return (
        <>
            <h3>{tittle}</h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar producto</th>
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
                                <td><button onClick={()=>handleDeletItem(id)} className="btn btn-danger">Eliminar</button></td>
                                {/* en este caso () esta vacio porque ya no recibimos componentes de hijos, 
                                el segundo parentesis tiene (id), no porque recibimos id, sino más bien ahora estamos
                                enviando el id */}
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
            <TotalView total={total} />

        </>
    );
}

LIstItemView.propTypes = {
    tittle: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}