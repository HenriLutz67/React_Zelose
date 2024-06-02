import '../styles/Banner.css'
import logo from '../assets/logo.png'
import titre from '../assets/titre.png'
function Banner()
{
    return (
    <div className="zelose-banner">
        <a href="https://www.zelose.com">
            <img class="zelose-logo" src={logo} alt="Zelose"/>
        </a>
        <div className="zelose-titre-div">
            <img className="zelose-titre" src={titre} alt="titre"/>
        </div>
    </div>
    )
}

export default Banner