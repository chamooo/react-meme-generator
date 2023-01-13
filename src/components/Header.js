import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <div className="header--logo">
                <img src="/img/Troll Face.png" alt="Logo"/>
                <h3>MemeGenerator</h3>
            </div>
            <div className="header--info">
                React Course - Project 3
            </div>
        </div>
    );
};

export default Header;
