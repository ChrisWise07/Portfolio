// filepath: /home/chris/GitHub/Portfolio/src/components/About/FlipCard.js
import React from "react";
import "./FlipCard.css"; // Import the CSS for the flip card

function FlipCard({ icon, text, textSize}) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {icon}
                </div>
                <div className="flip-card-back">
                    <p style={{ fontSize: textSize }}>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;