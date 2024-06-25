export const Registro = () => {
    
    return (

        <div className="seccion" id="6">
            <div className="Registro">
                <h1 className='R-title'>Registro</h1>
                <input className='Entrada' type='user' id='user' placeholder='ingresa tu nombre de usuario' required/>
                <input className='Entrada' type="text" id="nombre" placeholder="ingrese tu nombre/s" maxLength={40} required/>
                <input className='Entrada' type="text" id="apellidoP" placeholder="ingrese tu apellido paterno" maxLength={20} required/>
                <input className='Entrada' type="text" id="apellidoM" placeholder="ingrese tu apellido materno" maxLength={20} required/>
                <input className='Entrada' type="email" id="correo" placeholder="ingrese un correo" />
                <input className='Entrada' type='password' id='pwd' placeholder='Escribe una contraseña de 8 caracteres' maxLength={8} required/>
                <input className='Entrada' type='password' id='pwdC' placeholder='Confirma tu contraseña' maxLength={8} required/>
                <button  id="btn" className="Registrar">Registrar</button>
            </div> 
        </div>
    )
}