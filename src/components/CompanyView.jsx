export const CompanyView = ({ company }) => {
    const { name, fiscalNumber } = company
    return (
        <>
            <h3>Datos de la empresa</h3>
            <ul className="list-group">
                <li className="list-group-item active">{name}</li>
                <li className="list-group-item">Número Fiscal: {fiscalNumber}</li>

            </ul>
        </>
    );
}