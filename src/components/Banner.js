import '../styles/Banner.css'
import logo from '../assets/logo.png'
import titre from '../assets/titre.png'
function Banner({isVisible})
{
    return (

    <div className="zelose-banner">

        <i class={`fa fa-bars menu-deroulant ${isVisible === false ? '' : 'hidden'}`} aria-hidden="true"></i>

        <a href="https://www.zelose.com" className={`${isVisible === true ? '' : 'hidden'}`}>
            <img class="zelose-logo" src={logo} alt="Zelose"/>
        </a>

        <div className="zelose-titre-div">
            <img className="zelose-titre" src={titre} alt="titre"/>
        </div>

    </div>
    )
}

export default Banner