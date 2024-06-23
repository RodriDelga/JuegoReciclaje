export const Game = () => {

    return (
        <div className="seccion" id="5">
            <div className="ca">
                <h1>Videojuego</h1>
                <img className='img' src="src/images/Tierra.png" alt="" />
                {<p>Ahora que llegamos a estar parte, que es la que muchos esperarian, mostraremos el 
                juego que hemos estado haciendo como parte de este proyecto, en total son dos, uno
                se comenzo a crear en Unity y otro en la web, sin embargo el de Unity no fue terminado
                por lo que veremos una prueba del juego de la pagina web.
                </p>}
                <button type='button' className='Game'>Iniciar Juego</button>
            </div>
        </div>
    )
}