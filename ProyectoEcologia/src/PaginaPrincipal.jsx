import './PaginaPrincipal.css'
import { Registro } from './components/Page/Registro'
import { Game } from './components/Page/Game'
import { Us } from './components/Page/Us'
import { Bio } from './components/Page/Biodiversidad'
import { Menu } from './components/Page/Menu'

export const PaginaPrincipal = () => {
  
    return (
        <div className='Principal'>
            <div className="hero" id="hero">
                <h1 className="dd">EcoEarth</h1>
                <h3 className="Welcome">BIENVENIDO!</h3>
            </div>

            <Menu />

            <span className="indicador" id="indicador"></span>

            <div className="secciones">
                <div className="seccion" id="1">
                    <div className="ca">
                        <h1>El cambio climatico</h1>
                        <img className="img" src="src/images/1.jpg"/>
                        <p>El cambio climático hace referencia a los cambios
                            a largo plazo de las temperaturas y los patrones climáticos.
                            Estos cambios pueden ser naturales, pero desde el siglo XIX, 
                            las actividades humanas han sido el principal 
                            motor del cambio climático, debido principalmente a la quema
                            de combustibles fósiles, como el carbón, el petróleo y el gas, 
                            lo que produce gases que atrapan el calor.</p>
                    </div>
                </div>

                <div className="seccion" id="2">
                    <div className="ca">
                        <h1>¿Que es el desarrollo sostenible?</h1>
                        <img className='img' src="src/images/2.webp" />
                        {<p>Las expresiones desarrollo sostenible, desarrollo sustentable y
                            desarrollo perdurable se aplican al principio organizador para
                            alcanzar los objetivos de desarrollo humano y al mismo tiempo
                            sostener la capacidad de los sistemas naturales de proporcionar
                            los recursos naturales y los servicios del ecosistema en función
                            de los cuales dependen la economía y la sociedad, atendiendo 
                            muy especialmente- la preservación de sitios históricos y culturales.
                            El resultado deseado es una situación de sociedad donde las
                            condiciones de vida y los recursos se utilizan para continuar
                            satisfaciendo las necesidades humanas sin socavar la integridad
                            y la estabilidad del sistema natural. También puede definirse
                            como el desarrollo que satisface las necesidades del presente
                            sin comprometer la capacidad de las generaciones futuras para
                            satisfacer las suyas propias. 
                        </p>}
                    </div>
                </div>
                <Bio />       
                <Us />
                <Game />
                <Registro />
            </div>
        </div> 
    )
}