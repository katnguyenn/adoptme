import React from "react";

// Anything capitalized, React assumes you created. Anything lowercase is an actual name of html element.
// props: property passed from one parent component to child component (one way data flow). Makes it easy and flexible to dynamically generate content
const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed),
    ]);
};

export default Pet;