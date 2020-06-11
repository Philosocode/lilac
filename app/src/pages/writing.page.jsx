import React, { Component } from "react";

import { Nav } from "components/nav.component";
import { TitleInput } from "components/title-input.component";
import { BodyTextArea } from "components/body-textarea.component";
import { WordCount } from "components/word-count.component";
import { Fade } from "components/fade.component";

let timer;
export class WritingPage extends Component { 
  state = {
    wordCount: 0,
    showingWordCount: false
  };

  componentDidMount() {
    this.setState({ showingWordCount: true });
  }

  displayWordCount = async() => {
    clearTimeout(timer);

    await this.setState({
      showingWordCount: false
    });

    timer = setTimeout(() => {
      this.setState({ showingWordCount: true });
    }, 1000);
  }

  setWordCount = (count) => {
    this.setState({ wordCount: count });
  }

  render() {
    const { showingWordCount, wordCount } = this.state;

    return (
      <div className="o-page o-page--write">
        <Nav />
        <Fade show={showingWordCount}>
          <WordCount count={wordCount} />
        </Fade>

        <div className="o-content">
          <TitleInput />
          <BodyTextArea displayWordCount={this.displayWordCount} setWordCount={this.setWordCount} />
        </div>
      </div>
    )
  }
 }