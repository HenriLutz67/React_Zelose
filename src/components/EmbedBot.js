import '../styles/EmbedBot.css'
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EmbedBot(){
    return(
        <div className="stream-bot-container">
            <a  className= "container" href="https://www.twitch.tv/products/zelose_/ticket/new" target="_blank" rel="noreferrer">
                <div className="icon">
                    <FontAwesomeIcon icon={faTwitch} className="twitch-logo2" />
                </div>
                <div className="text">
                    <h3>Subscribe</h3>
                    <p>Abonne-toi et obtiens plein d'avantages !</p>
                </div>
            </a>           
            <a  className= "container" href="https://streamlabs.com/zelose_/tip" target="_blank" rel="noreferrer">
                <div className="icon">
                <i class="fa fa-gift donation-logo" aria-hidden="true"></i>
                </div>
                <div className="text">
                    <h3>Donation</h3>
                    <p>Une petite donation ?</p>
                </div>
            </a>    
            <a  className= "container" href="https://www.twitch.tv/zelose_/videos" target="_blank" rel="noreferrer">
                <div className="icon">
                    <i className="fa fa-video-camera replay-logo" aria-hidden="true"></i>
                </div>
                <div className="text">
                    <h3>Replay live</h3>
                    <p>Accède aux rediffusions instantannées des lives !</p>
                </div>
            </a>  
            <a  className= "container" href="https://www.youtube.com/@Zelose_" target="_blank" rel="noreferrer">
                <div className="icon">
                    <i class="fa-brands fa-square-youtube replay-yt-logo"aria-hidden="true" ></i>
                </div>
                <div className="text">
                    <h3>Hors live</h3>
                    <p>Je ne suis pas en live ? Regarde ma dernière vidéo youtube !</p>
                </div>
            </a>  
            
        </div>
    )
}

export default EmbedBot