import PropTypes from 'prop-types'

export const Organico = ({ enabled, setEnabled}) => {
    
    const Borrar = enabled ? 'no-organico' : 'Organico'

    return (
        <div onClick={() => setEnabled(true)} className={Borrar}>
            
        </div>
    )
}

Organico.propTypes = {
    enabled: PropTypes.bool.isRequired,
    setEnabled: PropTypes.bool.isRequired 
};

export default Organico;