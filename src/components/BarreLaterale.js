import React from 'react';
import '../styles/BarreLaterale.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

function BarreLaterale({isVisible}) {

    
    return (
        <div className={`barre-laterale ${isVisible ? '' : 'hidden'}`}>
            <div className="social">
                <a href="https://www.twitch.tv/zelose_" className="twitch" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitch} className="twitch-logo" />
                </a>

                <a href="https://www.youtube.com/@Zelose_" className="youtube" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className="youtube-logo" />
                </a>

                <a href="https://x.com/Zelose_" className="twitter" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="twitter-logo" />
                </a>

                <a href="https://www.tiktok.com/@zelose__" className="tiktok" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTiktok} className="tiktok-logo" />
                </a>

                <a href="https://discord.gg/cMaD5577" className="discord" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faDiscord} className="discord-logo" />
                </a>
            </div>
        </div>
    );
}

export default BarreLaterale;
