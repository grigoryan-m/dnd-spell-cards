import React, { useEffect } from 'react';
import '../styles/Card.css';

function Card(props){
    let materials = props.materials || "none";
    let tooltip, tooltiptext;
    useEffect(() => {
        tooltiptext = document.getElementsByClassName("tooltiptext")[0];
        tooltip = document.getElementsByClassName("components")[0];
        if(materials === "none"){
            tooltiptext.remove(); 
        }else{
            tooltip.style.textDecoration = "underline";
            tooltip.style.cursor = "help";
        }
    });
    return(
        <div className="card">
            <div className="basicInfo">
                <h2>{props.title}</h2>
                <p>{props.level} level</p>
            </div>
            <div className="additionalInfo">
                <div className='castingTime'>{props.castingTime}</div>
                <div className='range'>{props.range}</div>
                <div className='components tooltip'>{props.components}
                <span className="tooltiptext">{materials}</span>
                </div>
                <div className='duration'>{props.duration}</div>
            </div>
            <div className='description'>
                <p>{props.description}</p>
            </div>
            <div className='higherLevels'>
                <p>{props.higherLevels}</p>
            </div>
        </div>
    );
}

export default Card;