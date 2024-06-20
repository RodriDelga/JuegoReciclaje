import PropTypes from 'prop-types'

export const Inorganico = ({ enabled, setEnabled }) => {

    const Borrar = enabled ? 'no-inorganico' : 'Inorganico'

    return (
        <div onClick={() => setEnabled(true)} className={Borrar}>
            <img src=""/>
        </div>
        
    )
}

Inorganico.propTypes = {
    enabled: PropTypes.bool.isRequired,
    setEnabled: PropTypes.bool.isRequired // Define que 'enabled' es un booleano requerido
};

export default Inorganico