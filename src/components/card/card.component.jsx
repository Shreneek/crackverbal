import React from 'react';
import './card.css'; // Import your CSS file for styling

function Card({ name, profilePic, score, bio }) {
    return (
        <div className="card-body">
            <div className="row">
                <div className="profile-pic">
                    <img src={profilePic} alt={name} />
                </div>
                <div>
                    <h4 className='margin-zero'>{name}</h4>
                    <h4 className='margin-zero'>GMAT Score:{score}</h4>
                </div>
            </div>
            <div className="row">
                <p className="bio">{bio}</p>
            </div>
        </div>

    );
}

export default Card;
