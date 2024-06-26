import { Registro } from './components/Registro'
import { Game } from './components/Game'
import { Us } from './components/Us'
import { Bio } from './components/Biodiversidad'
import { Menu } from './components/Menu'
import { Desarrollo } from './components/Desarrollo'
import { Cambio } from './components/Cambio'
import { Hero } from './components/Hero'
import './Styles/App.css'

/**
 * Importamos todo lo necesario para que la pagina
 * funcione
 */

function App() {

  return (
    <main> {/* Los componentes deben estar unidos por algo, ya sea un main, div, nav, etc. */}
      <div className='Principal'>
            <Hero /> {/* Esto es un componente, como pueden ver están regados por todo este compoenete */}

            <Menu />

            <span className="indicador" id="indicador"></span>

            <div className="secciones">
                <Cambio />
                <Desarrollo />
                <Bio />       
                <Us />
                <Game />
                <Registro />
            </div>
        </div>  
    </main>
  )
}

export default App
