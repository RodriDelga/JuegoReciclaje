
import PropTypes from 'prop-types'

export const Square = ({ children, enabled, setEnabled, index }) => {

    return (
        <div className="square">
            {children}
        </div>
    )
}

Square.propTypes = {
    enabled: PropTypes.bool.isRequired,
    setEnabled: PropTypes.bool.isRequired
}