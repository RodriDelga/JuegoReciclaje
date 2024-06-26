import PropTypes from 'prop-types'

export const BoteInorganico = ({ setEnabled }) => {

    return (
        <div className="Basura">
            <button className="Bote-Inorganico" onClick={() => setEnabled(false)}>
                <div className='Bolsa' />
            </button>
        </div>
    )
}

BoteInorganico.propTypes = {
    setEnabled: PropTypes.func.isRequired
};