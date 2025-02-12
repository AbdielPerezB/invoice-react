import PropTypes from "prop-types";
import { TotalView } from "./TotalView";
export const LIstItemView = ({ tittle, items, total }) => {
    return (
        <>
            <h3>{tittle}</h3>
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
            <TotalView total={total} />

        </>
    );
}

LIstItemView.propTypes = {
    tittle: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}