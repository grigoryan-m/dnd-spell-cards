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
                <div className='duration'>Instantaneous</div>
            </div>
            <div className='description'>
                <p>A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.</p>
            </div>
            <div className='higherLevels'>
                <p>When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.</p>
            </div>
        </div>
    );
}

export default Card;