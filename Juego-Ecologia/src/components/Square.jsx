import PropTypes from 'prop-types'

export const Square = ({ children }) => {

    return (
        <div className="square">
            {children}
        </div>
    )
}

Square.propTypes = {
    children: PropTypes.node // Valida que children puede ser cualquier tipo de nodo de React
}