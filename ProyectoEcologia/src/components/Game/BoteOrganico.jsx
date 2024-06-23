import PropTypes from 'prop-types'

export const BoteOrganico = ({ enabled, setEnabled }) => {

    return (
        <button className="Bote-Organico" onClick={() => setEnabled(false) }>
            {enabled ? 'Desactivar' : 'Activar'} seguir puntero
        </button>
    )
}

BoteOrganico.propTypes = {
    enabled: PropTypes.bool.isRequired,
    setEnabled: PropTypes.bool.isRequired
}

export default BoteOrganico