import React from 'react';


class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
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
         <textarea id = "editor"
          value={this.state.textAreaValue}
          onChange={this.handleChange}
          rows={5}
          cols={35}
        />

          <h4>Controlled Input:</h4>
  
          <p id="preview">{this.state.input}</p>
          {<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>}
          {<script> document.getElementById('content').innerHTML =
            marked('# Marked in browser\n\nRendered by **marked**.');</script>}
        </div>
      );
    }
  };

  export default ControlledInput;