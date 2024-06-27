import PropTypes from 'prop-types'

export const BoteOrganico = ({ setEnabled, setSelected }) => {

    return (
        <div className="Basura">
            <button className="Bote-Organico" onClick={() => { setEnabled(false); setSelected(false)}}>
                <div className='Bolsa' />
            </button>
        </div>
    )
}

BoteOrganico.propTypes = {
    setEnabled: PropTypes.func.isRequired, // Define PropTypes para setEnabled
    setSelected: PropTypes.func
};