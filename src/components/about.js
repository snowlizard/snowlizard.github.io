import React from 'react';

export const About = () => {
    return (
        <div id="aMain">
            <div id="about">
                <div className="cell" id="imgDiv">
                    <img src={window.location.origin + '/images/about.jpeg'} id="JnM"></img>
                </div>
                <div className="cell" id="aboutText">
                    <div id="aText">
                        <div id="aboutHeadings">
                            <h2>Julian Gonzalez</h2>
                            <h3>Aspiring Developer</h3>
                        </div>
                        <p>
                            Ugly boi here enjoys programming as a hobby and is also currently making a couple indie
                            titles with his friends. 
                            Education: Associates in Retardation
                        </p>

                    </div>
                </div>
            </div>
            <div id="contact">
                <h4>If you wish to contact me you can send me and email@</h4>
                <h5>retardDev@gmail.com</h5>
            </div>
        </div>
    );
};