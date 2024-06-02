import { useEffect, useState } from "react";
import '../styles/Rain.css'
import E from '../assets/E.png'

function Rain()
{
    const [pluie, setPluie] = useState([]);
    
    useEffect(()=>  
        {   
            const generatePluie = () => 
                {   
                    const pluieArray = [];  
                    for (let i = 0; i < 10; i++) 
                        {   
                            const size = Math.random() * 10 + 1; //Taille pixel 
                            pluieArray.push(    
                                {   
                                    id: i,
                                    top: Math.random() * 100 + "%",
                                    left: Math.random() * 100 + "%",
                                    animationDuration: Math.random()*10+20+ 's',
                                    height:size + "%",
                                }   
                            )   
                        }
                    setPluie(pluieArray);   
                }   
            generatePluie();    
        }, []   
    );  
    
    return( 
        <div className="pluie-container">   
            {pluie.map(goutte => (  
                <img    
                    key={goutte.id} 
                    src={E} 
                    className="goutte"  
                    style={{    
                        animationDuration: goutte.animationDuration,
                        height: goutte.height,
                        top:goutte.top,
                        left:goutte.left
                    }}
                    alt="goutte"
                    />
            ))}
        </div>
    )
}

export default Rain;