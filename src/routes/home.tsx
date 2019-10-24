import React from "react";
// tslint:disable-next-line: no-implicit-dependencies
import Highlight from "react-highlight";
// tslint:disable-next-line: no-implicit-dependencies
import { Link } from "react-router-dom";
import packageJSON from '../../package.json'
import wwords from "../content/home-content.json";
const words: { [index: string]: { [index: string]: string } } = wwords

type SupportedLangs = keyof typeof words;
const version = packageJSON.version



// const randomData = blamDataRows(["foo", "bar", "baz"], 5);
// These are the supported languages
const DEFAULT_LANG = "en";
interface HomeScreenProps {
  lang: SupportedLangs;
}

export default class Home extends React.Component<HomeScreenProps> {
  private readonly randomFilenames = ['copy', 'new-hot-startup', 'foobarbaz', 'blockchainz', 'stuff', 'wack-wack-wack', '1']
  private randomFilename = this.randomFilenames[0]
  constructor(props: HomeScreenProps) {
    super(props);
    const rand = Math.floor(Math.random() * this.randomFilenames.length)
    this.randomFilename = this.randomFilenames[rand] || this.randomFilename
    const { lang } = props;
  }

  public render() {
    // this is the word render function
    // it will display the text content in the given language or in english
    // the red X means there is missing text content
    const W = (input: string) => {
      const display = words[DEFAULT_LANG][input] || "";
      return `${display}` || "❌";
      // return this.theseWords[input] || this.defaultWords[input] || "❌";
    };
    return (
      <div className="page-content">
        <div className="wrapper">
          <h1><span role="img" aria-label="Bento">🔁</span> NaiveAsync</h1>
          <h2>an opinionated and painless <a href="https://reactjs.org/">React</a> promise wrapper</h2>
          <h3>
              v{version} -{" "}
              <Link to="/test">Tests</Link>-{" "}
              <a href="https://github.com/untra/naiveasync">Github</a> -{" "}
              <a href="https://www.npmjs.com/package/@untra/naiveasync">NPM</a> -{" "}
              <a href="https://dashboard.cypress.io/#/projects/wrytfx/runs">Cypress</a>
            </h3>
        </div>
      </div>
    );
  }
}
