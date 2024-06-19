import './PaginaPrincipal.css'

export const PaginaPrincipal = () => {
    
    const Juego = () => {
        
    }

    return (
        <div className="Main-Container">
            <header className="Main-header">
                <div className="logo">
                    <img src='src\images\CBTIS49.png' className='logo-img'/>
                    <h1 className='logo-name'>Reciclaje</h1>
                </div>
                <div className='Information'>
                    <div className='Info-Container'>
                        <h2>Incio</h2>
                    </div>
                    <div className='Info-Container'>
                        <h2 className='Who'>¿Quienes somos?</h2>
                    </div>
                    <div className='Info-Container'>
                        <h2>Juego</h2>
                    </div>
                </div>
            </header>
            <section className='main-section'>
                <article className='main-text'>
                    <div className='title'>
                        <h1>Bienvenido a nuestra pagina</h1>
                        <button onClick={Juego}>Ir al juego</button>   
                    </div>
                </article>
                <article className='us-text'>

                </article>
                <article className='game-text'>

                </article>
            </section>
        </div>
    )
}