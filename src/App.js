import * as React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      justClicked: null,
      value: [],
      letters: [
        {
          name: "A",
          value: "Apple"
        },
        {
          name: "B",
          value: "Ball"
        },
        {
          name: "C",
          value: "Cat"
        },
        {
          name: "D",
          value: "Dog"
        },
        {
          name: "E",
          value: "Eagle"
        },
        {
          name: "F",
          value: "Fish"
        }
      ]
    };
  }
  handleClick(e) {
    console.log("TEST", e.target.dataset);
    this.setState({ justClicked: e.target.dataset.letter });
  }

  render() {
    console.log("TEST", this.state.letters, this.state.letters.length);
    return (
      <div>
        Just clicked: {this.state.justClicked}
        <ul>
          {this.state.letters
            ? this.state.letters.map((letter) => (
                <li
                  key={letter.name}
                  data-letter={letter.name}
                  onClick={(e) => this.handleClick(e)}
                >
                  {letter.value}
                </li>
              ))
            : null}
        </ul>
      </div>
    );
  }
}
