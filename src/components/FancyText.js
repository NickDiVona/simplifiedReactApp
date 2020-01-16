//in your react components always remember to import React, even if you are just making a functional component
import React from 'react';
import '../App.css';

// declare a new functional component, name it FancyText
// have it take in props, which it gets from its parent
const FancyText = props => {
  // return a p tag with some styling
  // inside of that, render whatever was passed to this component as props with the key "text"
  return <p className="Fancy">{props.text}</p>;
};

// export out component so we can use it elsewhere
export default FancyText;
