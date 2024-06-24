import { useState } from "react"

export const Game = () => {

    const [change, setChange] = useState(0)

    const Next = () => {
        if(change<=1){
            setChange(change+1)
        } else {
            setChange(0)
        }
    }

    const Back = () => {
        if(change==0){
            setChange(2)
        } else {
            setChange(change-1)
        }
    }


    return (
        <div className="seccion" id="5">
            <div className="ca">
                <h1>Videojuego</h1>
                <img className='img' src="src/images/Tierra.png" alt="" />
                <h4 className="text-unity">Ahora que llegamos a estar parte, que es la que muchos esperarian, mostraremos el 
                juego que hemos estado haciendo como parte de este proyecto, en total son dos, uno
                se comenzo a crear en Unity y otro en la web, comenzemos por el de Unity</h4>
                <h3 className="unity-h3">Videojuego en Unity</h3>
                <h4 className="text-unity">La idea con este juego era hacer un personaje que luchara contra las personas que le querian robar
                    sus recursos, por lo que estas son imagenes del avanze que hicimos.
                </h4>
                <div style={{
                    width: '600px',
                    height: '400px',
                    backgroundImage: `url('src/images/Unity${change}.jpg')`,
                    backgroundSize: 'cover',
                }} className="Unity-images">
                    <button onClick={Back} className="next"><img className="img-next" src="src/images/back.png"/></button>
                    <button onClick={Next} className="next" ><img className="img-next" src="src/images/next.png"/></button>
                </div>
                <h4 className="text-unity">Sin embargo, por problemas de tiempo no llegamos a terminar el proyecto por lo que se quedo en etapas
                    muy tempranas de desarrollo, y en el otro juego tambien fue el mismo caso pero el link de ese juego esta
                    aquí abajo por si quieren revisar lo que se logro hacer.
                </h4>
                <button type='button' className='Game'>Iniciar Juego</button>
            </div>
        </div>
    )
}