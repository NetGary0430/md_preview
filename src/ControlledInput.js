import React from "react";

let marked = require("marked");

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: defaultText
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <textarea
          id="editor"
          value={this.state.textAreaValue}
          onChange={this.handleChange}
          rows={5}
          cols={35}
        />

        <h4>Markdown Preview:</h4>

        <hr />
        <p
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(this.state.input) }}
        ></p>
      </div>
    );
  }
}

var defaultText = `
# H1

## H2

[Link](http://google.com)

**Test**

\`Inline code\` with backticks
* List

> Blockquote

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`;

export default ControlledInput;
