export const Organico = ({ enabled, setEnabled}) => {
    
    const Borrar = enabled ? 'no-organico' : 'Organico'

    return (
        <div onClick={() => setEnabled(true)} className={Borrar}>
            <img src=""/>
        </div>
    )
}