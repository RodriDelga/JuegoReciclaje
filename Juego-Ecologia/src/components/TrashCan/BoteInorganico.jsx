import PropTypes from 'prop-types'

export const BoteInorganico = ({ setEnabled, setSelected }) => {

    return (
        <div className="Basura">
            <button className="Bote-Inorganico" onClick={() => { setEnabled(false); setSelected(false)}}>
                <div className='Bolsa' />
            </button>
        </div>
    )
}

BoteInorganico.propTypes = {
    setEnabled: PropTypes.func.isRequired,
    setSelected: PropTypes.func
};