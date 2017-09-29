import React, { Component } from 'react';

// containment
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="title">
                Welcome
            </h1>
            <p className="message">
                Thank you for visiting our space.
            </p>
        </FancyBorder>
    );
}

export default WelcomeDialog;