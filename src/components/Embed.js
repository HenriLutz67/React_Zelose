import '../styles/Embed.css'

function Embed(){
    return(
        <div className="stream">
            <iframe
                title="Zelose stream"
                src="https://player.twitch.tv/?channel=zelose_&parent=www.zelose.com"
                width="1440"
                height="810"
                frameBorder="0"
                scrolling="no"
                allowFullScreen={true}
            ></iframe>
            <iframe
            title="Zelose stream chat"
                id="chatembed"
                src="https://player.twitch.tv/embed/zelose/chat?parent=www.zelose.com"
                width="350"
                height="806"
            ></iframe>
        </div>
    )

}

export default Embed
/*
<iframe src="https://player.twitch.tv/?channel=zerator&amp;parent=zerator.com" 
frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
*/