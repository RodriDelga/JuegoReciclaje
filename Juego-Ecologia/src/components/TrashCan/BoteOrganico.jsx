import PropTypes from 'prop-types'

export const BoteOrganico = ({ setEnabled }) => {

    return (
        <div className="Basura">
            <button className="Bote-Organico" onClick={() => setEnabled(false) }>
                <div className='Bolsa' />
            </button>
        </div>
    )
}

BoteOrganico.propTypes = {
    setEnabled: PropTypes.func.isRequired // Define PropTypes para setEnabled
};