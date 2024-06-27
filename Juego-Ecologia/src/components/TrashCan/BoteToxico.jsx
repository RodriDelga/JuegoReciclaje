import PropTypes from 'prop-types'

export const BoteToxico = ({ setEnabled, setSelected }) => {

    return (
        <div className="Basura">
            <button className="Bote-Toxico" onClick={() => { setEnabled(false); setSelected(false)}}>
                <div className='Bolsa' />
            </button>
        </div>
    )
}

BoteToxico.propTypes = {
    setEnabled: PropTypes.func.isRequired,
    setSelected: PropTypes.func
};