import React, { Component } from 'react';
import './App.css';
//import any child components of App
import FancyText from './components/FancyText';

// declare our component
class App extends Component {
  // declare that there will be a constructor method
  // have it take in props
  constructor(props) {
    super(props);

    // initialize the state for this component
    // give it a property of buttonPressed and set it to false
    this.state = {
      buttonPressed: false
    };
  }

  // declare the method
  renderFancyText() {
    // using the ternary operator, check the buttonPressed property of state
    // if it is false, return the first thing, otherwise return the second
    return this.state.buttonPressed === false ? (
      <FancyText text={'Do not press the red button.'} />
    ) : (
      <FancyText text={'I told you to not press the button!'} />
    );
  }

  // declare the method
  renderButton() {
    // using the ternary operator, check the buttonPressed property of state
    // if false, return a clickable div which calls onButtonPressed when clicked, otherwise return nothing (null).
    return this.state.buttonPressed === false ? (
      <div className="Button" onClick={() => this.onButtonPressed()}>
        Click me!
      </div>
    ) : null;
  }

  // declare the method
  onButtonPressed() {
    // when this method is called, set the buttonPressed property of state to true, regardless of its current value
    this.setState({ buttonPressed: true });
  }

  // render method, which is always needed in a React Component in order to get something on the screen
  // return the classic app wrapper

  // inside of that, render FancyText as a self closing component
  // pass it a prop called text

  // call renderFancyText, which is a helper method listed above
  // whatever that function returns will be rendered

  // call renderButton, which is another helper method listed above
  // whatever that function returns will be rendered
  render() {
    return (
      <div className="App">
        {this.renderFancyText()}
        {this.renderButton()}
      </div>
    );
  }
}

// export our App component
export default App;
