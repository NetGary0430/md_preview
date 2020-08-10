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
          rows={20}
          cols={70}
        >
          # H1 [Link](http://google.com) ## H2 **Test** \`Inline code\` with
          backticks * List > Blockquote ![React
          Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
        </textarea>

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

[Link](http://google.com)  

## H2  

**Test**  

\`Inline code\` with backticks  

* List  

> Blockquote  

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`;

export default ControlledInput;
