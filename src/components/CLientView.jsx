import PropTypes from "prop-types";
export const CLientView = ({ client }) => {
    const { city, country, number, street } = client.address;
    return (
        <>
            <h3>Datos del cliente</h3>
            <ul className="list-group">
                <li className="list-group-item active">{client.name} {client.lasName} </li>
                <li className="list-group-item">{street} {number}, {city}, {country}</li>
            </ul>
        </>
    );
}
CLientView.propTypes = {
    client: PropTypes.object.isRequired
}