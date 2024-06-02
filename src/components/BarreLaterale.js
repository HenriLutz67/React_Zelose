import React from 'react';
import '../styles/BarreLaterale.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

function BarreLaterale() {
    return (
        <div className="barre-laterale">
            <div className="social">
                <a href="https://www.twitch.tv/zelose_" className="twitch">
                    <FontAwesomeIcon icon={faTwitch} className="twitch-logo" />
                </a>

                <a href="https://www.youtube.com/@Zelose_" className="youtube">
                    <FontAwesomeIcon icon={faYoutube} className="youtube-logo" />
                </a>

                <a href="https://x.com/Zelose_" className="twitter">
                    <FontAwesomeIcon icon={faTwitter} className="twitter-logo" />
                </a>

                <a href="https://www.tiktok.com/@zelose__" className="tiktok">
                    <FontAwesomeIcon icon={faTiktok} className="tiktok-logo" />
                </a>
            </div>
        </div>
    );
}

export default BarreLaterale;
