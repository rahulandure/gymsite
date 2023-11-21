import React from "react";
import './Programs.css';
import programData from '../../data/programData';
import rightArrow from '../../assets/rightArrow.png'; 

const Programs = () => {
    return (
        <div className="programs" id="programs">
            <div className="programs-header">
                <span className="stroke-text">Explore Our</span>
                <span>Programs</span>
                <span className="stroke-text">To Shape You</span>
            </div>

            <div className="program-catogory">
            {programData.map((program) => (
                <div className="catogory">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">
                <span> Join Now</span><img src={rightArrow} alt="" />
                </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Programs
