import { Registro } from './components/Registro'
import { Game } from './components/Game'
import { Us } from './components/Us'
import { Bio } from './components/Biodiversidad'
import { Menu } from './components/Menu'
import { Desarrollo } from './components/Desarrollo'
import { Cambio } from './components/Cambio'
import { Hero } from './components/Hero'
import './App.css'

function App() {

  return (
    <main>
      <div className='Principal'>
            <Hero />

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
