import PropTypes from "prop-types";
export const LIstItemView = ({ tittle, items }) => {
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
        </>
    );
}

LIstItemView.propTypes = {
    tittle: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}