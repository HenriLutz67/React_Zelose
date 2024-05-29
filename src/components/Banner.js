import '../styles/Banner.css'
import logo from '../assets/logo.png'
function Banner()
{
    return (
    <div className="zelose-banner">
        <img className="zelose-logo" src={logo} alt="Zelose"/>
    </div>
    )
}

export default Banner