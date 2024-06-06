import '../styles/Embed.css'

function Embed(){
    return(
        <div className="stream">
            <iframe
                title="Zelose stream"
                className="video"
                src="https://player.twitch.tv/?channel=zelose_&parent=zelose.com"
                width="1100"
                height="619"
                frameBorder="0"
                scrolling="no"
                allowFullScreen={true}
            ></iframe>
            <iframe
                title="Zelose stream chat"
                className="chat"
                id="chatembed"
                src="https://www.twitch.tv/embed/zelose_/chat?parent=zelose.com"
                width="320"
                height="619"
                frameBorder="0"
                scrolling="no"
                
            ></iframe>
        </div>
    )

}

export default Embed
