
import PropTypes from 'prop-types'

export const Square = ({ enabled, setEnabled }) => {


    return (
        <div className="square">
            
        </div>
    )
}

Square.propTypes = {
    enabled: PropTypes.bool.isRequired,
    setEnabled: PropTypes.bool.isRequired
}