import React from 'react';
import '../styles/BarreLaterale.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

function BarreLaterale()
{
    return(
        <div className="barre-laterale">
            <div className="social">
                <a href="https://www.twitch.tv/zelose_">
                    <FontAwesomeIcon icon={faTwitch} style={{color: "#6441a5",}} className="twitch"/>
                </a>
                <a href="https://www.youtube.com/@Zelose_">
                    <FontAwesomeIcon icon={faYoutube} style={{color: "#c60606",}} className="youtube"/>
                </a>
                <a href="https://x.com/Zelose_">
                    <FontAwesomeIcon icon={faTwitter} style={{color: "#00acee",}} className="twitter"/>
                </a>
                <a href="https://www.tiktok.com/@zelose__">
                    <FontAwesomeIcon icon={faTiktok} style={{color: "#FFFFFF",}} className="tiktok"/>
                </a>
            </div>
            <ul>

            </ul>
        </div>
    )
}

export default BarreLaterale;