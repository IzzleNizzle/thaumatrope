import React, { Component } from 'react'
import ThaumatropeFront from './ThaumatropeFront'
import ThaumatropeBack from './ThaumatropeBack'


class Thaumatrope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: "0",
      isToggleOn: false
    };
  }

  handleSlider = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  // This is where I will do the calculations necessary to determine which side of the Thaumatrope to display
  calcThaumaSide = () => {
    //  Step 1: Add 90 to slider value, this helps regularize the patterns involved. 
    //  Also apply absolute value to achieve same functionality whether negative or positive
    let steps = Math.abs(this.state.slider) + 90;

    // Step 2: Divide by 90 to group numbers by 90
    steps /= 90;

    // Step 3: The group into 4's, this is how often the pattern repeats
    steps /= 4;

    // Step 4: Then modulas 1 to deal with only the two decimal points
    steps %= 1;

    // Step 5: Keep to two deciaml points
    steps = steps.toFixed(2);

    // Step 6: Return true if the Thaumutrope is on the front, false otherwise
    return steps >= 0.5 ? true : false;
  }


  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    let styles = {
      transform: `rotateY(${this.state.slider}deg)`,
      borderRadius: `50%`,
      boxShadow: `5px 10px #888888`,
      background: `wheat`
    }

    return (
      <div>
        <div className={`special ${this.state.isToggleOn ? "testing" : null}`}>
          {this.calcThaumaSide() ? (
            <ThaumatropeBack
              styles={styles}
            />
          ) : (
              <ThaumatropeFront
                styles={styles}
              />
            )}
        </div>

        <input
          type="range"
          name="slider"
          min="-1000"
          max="900"
          value={this.state.slider}
          onChange={this.handleSlider}
        />

        {/* Uncomment this component to see the juicy details */}
        {/*
        <ShowMyWork 
          slider={this.state.slider}
        />
        */}

        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>

      </div>
    );
  }
}

export default Thaumatrope