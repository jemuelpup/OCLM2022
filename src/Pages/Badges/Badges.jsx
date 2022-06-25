//import Badges from '.components/Badges/Badges';//cut it and paste to the component
import React from 'react';
import brothers from "../../brothers.json";
import './Badges.scss';
import BadgeImage from "../../Assets/badge.png"

const Badges = ({

}) => {
    
    return <div className='BadgesContainer'>
        <div className="badge-list">
        {brothers.map(name => 
            <div className="badge">
                <img src={BadgeImage} alt="" />
                <p className="text-area">{name}<br/>Galas Congregation</p>
            </div>
        )}
        </div>
    </div>
}

export default Badges;