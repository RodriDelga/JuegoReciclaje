import PropTypes from 'prop-types'

export const BoteToxico = ({ setEnabled }) => {

    return (
        <div className="Basura">
            <button className="Bote-Toxico" onClick={() => setEnabled(false)}>
                <div className='Bolsa' />
            </button>
        </div>
    )
}

BoteToxico.propTypes = {
    setEnabled: PropTypes.func.isRequired
};