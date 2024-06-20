
export const Inorganico = ({ enabled, setEnabled }) => {

    const Borrar = enabled ? 'no-inorganico' : 'Inorganico'

    return (
        <div onClick={() => setEnabled(true)} className={Borrar}>
            <img src=""/>
        </div>
        
    )
}