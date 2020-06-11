import React, { Component } from "react";

// FROM: https://stackoverflow.com/a/61812393
export class BodyTextArea extends Component {
  constructor(props) {
    super(props);

    this.textAreaRef = React.createRef();
  }

  componentDidMount() {
    this.handleInputChange(this.textAreaRef.current);
  }

  handleInputChange = (ta) => {
    ta.style.height = "auto";
    ta.style.height = ta.scrollHeight + "px"; 

    const wordCount = this.getWordCount(ta.value);
    
    this.props.setWordCount(wordCount);
    this.props.displayWordCount();
  }

  // FROM: https://codereview.stackexchange.com/a/43281
  getWordCount = (text) => { 
    if (text === "") return 0;

    return text.match(/\b\S+\b/g).length;
  }

  render() {
    return (
      <textarea 
        className="c-body-textarea" 
        ref={this.textAreaRef}
        onChange={(ev) => this.handleInputChange(ev.target)}
        placeholder="Start typing..."
      />
    )
  }
 }