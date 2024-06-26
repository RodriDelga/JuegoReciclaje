import PropTypes from 'prop-types'

export const BoteOrganico = ({ setEnabled }) => {

    return (
        <div className="Basura">
            <button className="Bote-Organico" onClick={() => setEnabled(false) }>{/* Esto hace una función que manda setEnabled igual a false para cambiar su valor y deje de seguir el cursor */}
                <div className='Bolsa' />
            </button>
            {/* Se ejecutara lo mismo con los otros dos botes */}
        </div>
    )
}

BoteOrganico.propTypes = {
    setEnabled: PropTypes.func.isRequired // Define PropTypes para setEnabled
};