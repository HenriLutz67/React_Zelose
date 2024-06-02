import { useState, useEffect} from 'react';
import '../styles/LettreAnim.css';
import Z from '../assets/Z.png';
import E from '../assets/E.png';
import L from '../assets/L.png';
import O from '../assets/O.png';
import S from '../assets/S.png';

function LettreAnim()
{
    const [lettre, setLettre] = useState([]);

    useEffect(() =>
        {
            function generer()
            {

                const arrayLettre = [];
                const aleatoireLettre = [Z,E,L,O,S];


                for(let i = 0; i < 50; i++)
                    {

                        const un = Math.random();
                        const deux = Math.random();
                        const aleatoireChiffre = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
                        if (un > 0.5)
                            {
                                aleatoireChiffre[0] = aleatoireChiffre[0] * -1;
                            }
                        if (deux > 0.5)
                            {
                                aleatoireChiffre[1] = aleatoireChiffre[0] * -1;
                            }
                        
                        const aleatoireDuree = [Math.floor(Math.random() * 10 + 4)]

                        arrayLettre.push(
                            {
                                id:i,
                                height: Math.random() * 10 + 1, //Hauteur : 1 à 11%
                                top: Math.random() * 100,
                                left: Math.random() * 100,
                                animationDuration: aleatoireDuree + "s",
                                src: aleatoireLettre[Math.floor(Math.random() * 5)],
                                aleatoire:aleatoireChiffre

                            } 
                        )
                    }
                setLettre(arrayLettre); 
            }
            generer();
        }, []
    );

    return(
        <div className="lettre-animation-container">

            {lettre.map(objet =>
                <img
                    id={objet.id}
                    src={objet.src}
                    className="lettre"
                    style={{
                        height:objet.height + "%",
                        top:objet.top + "%",
                        left:objet.left + "%",
                        animationDuration:objet.animationDuration,
                        animation: `anim-${objet.id} ${objet.animationDuration} linear infinite`,
                        filter: `blur(${12 - objet.height}px)`,
                        zIndex: `-10000`
                    }}
                    alt="Lettre"
                />
            )}
            <style>
                {lettre.map((objet) =>
                `@keyframes anim-${objet.id} {
                    0% {
                        transform: translate(0px, 0px);
                        animation-timing-function: ease-in-out;
                    }
                    50% {
                        transform: translate(${objet.aleatoire[0]}px, ${objet.aleatoire[1]}px);
                        animation-timing-function: ease-in-out;
                    }
                    100% {
                        transform: translate(0px, 0px);
                        animation-timing-function: ease-in-out;
                    }
                }
                `
                ).join('')}

            </style>
        </div>
    )
}

export default LettreAnim