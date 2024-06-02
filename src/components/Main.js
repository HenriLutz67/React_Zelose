import React from 'react'
import Embed from './Embed'
import '../styles/Main.css'
import Lettre from './LettreAnim.js'
import EmbedBot from './EmbedBot.js'

function Main(){

    return(
        <div className="main-container">
            <Embed className="embed"/>
            <EmbedBot />
            <Lettre />
        </div>
    )
}

export default Main