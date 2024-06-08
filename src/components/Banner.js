import '../styles/Banner.css';
import logo from '../assets/logo.png';
import titre from '../assets/titre.png';
import {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

function Banner({isVisible})
{
    const [menuOuvert, setMenuOuvert] = useState(false);
    let menuRef = useRef();
    let menuRef2 = useRef();

    useEffect(()=> {

        let handler = (e)=>{
            if(!menuRef.current.contains(e.target) && !menuRef2.current.contains(e.target))
                {
                    setMenuOuvert(false);
                }
        }
        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    });


    return (

    <div className="zelose-banner">

        <i class={`fa fa-bars menu-deroulant ${isVisible === false ? '' : 'hidden'}`} 
            ref={menuRef2}
            aria-hidden="true"
            onClick={() => setMenuOuvert(!menuOuvert)}></i>

        <div className={`div-menu-deroulant ${menuOuvert === false || isVisible === true ? 'hiddenMenu' : 'activeMenu'}`}
        ref={menuRef}>
            <a href="https://www.twitch.tv/zelose_" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitch} className="img-twitch" />
            </a>
            <a href="https://www.youtube.com/@Zelose_" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="img-youtube" />
            </a>
            <a href="https://x.com/Zelose_" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="img-twitter" />
            </a>
            <a href="https://www.tiktok.com/@zelose__" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTiktok} className="img-tiktok" />
            </a>
            <a href="https://discord.gg/cMaD5577" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faDiscord} className="img-discord" />
            </a>
        </div>


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