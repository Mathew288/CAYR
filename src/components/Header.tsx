import '../../src/styles/Header.css'
import '../../src/styles/General.css';

export function Header() {
    return <header id='header' className='flex-row'>
        <img src="/src/assets/logo-cayr-dark.jpg" alt="logotipo" id="logo-cayr" />
        <nav>
            <ul className='flex-row'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Mis tareas</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    </header>
}