import { useState } from "react"

/**
 * El useState se importa desde la libreria 'react'
 */

export const Game = () => {

    const [change, setChange] = useState(0) // Esto es un useState, que se utiliza para cambiar estados de componentes

    /**
     * En el ejemplo de aquí abajo utilize este useState para
     * cambiar el estado de unas imagenes, o mejor dicho para
     * cambiar de una imagen a otra a partir de un contador
     */
    const Next = () => {
        if(change<=1){
            setChange(change+1) // Cuando se quiere cambiar el estado se tiene que usar la constante setChange o el nombre que se haya elegido
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
                <img className='img' src="src/images/Tierra.webp" alt="" />
                <h4 className="text-unity">Ahora que llegamos a estar parte, que es la que muchos esperarian, mostraremos el 
                juego que hemos estado haciendo como parte de este proyecto, en total son dos, uno
                se comenzo a crear en Unity y otro en la web, comenzemos por el de Unity</h4>
                <h3 className="unity-h3">Videojuego en Unity</h3>
                <h4 className="text-unity">La idea con este juego era hacer un personaje que luchara contra las personas que le querian robar
                    sus recursos, por lo que estas son imagenes del avanze que hicimos.
                </h4>
                {/**
                 * Las imagenes están guardadas en este div el cual se le cambian las propiedades, en especial la de
                 * backgroundImage ya que su valor depende de lo que este en el useState por lo que si cambia el valor
                 * cambia la imagen
                 */}
                <div style={{
                    width: '600px',
                    height: '400px',
                    backgroundImage: `url('src/images/Unity${change}.webp')`,
                    backgroundSize: 'cover', // Esto es para que la imagen sea del tamaño del div
                }} className="Unity-images">
                    <button onClick={Back} className="next"><img className="img-next" src="src/images/back.webp"/></button> {/* Esto llama a la función que esta arriba */}
                    <button onClick={Next} className="next" ><img className="img-next" src="src/images/next.webp"/></button>
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