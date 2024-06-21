import { Organico } from "./Organico.jsx"
import PropTypes from 'prop-types'

export const Square = ({ enabled, setEnabled }) => {


    return (
        <div className="square">
            <Organico enabled={enabled} setEnabled={setEnabled}/>
        </div>
    )
}

Square.propTypes = {
    enabled: PropTypes.bool.isRequired,
    setEnabled: PropTypes.bool.isRequired
}