import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

export function start(name: string, subline: string) {
  var mountNode = document.getElementById("app");
  ReactDOM.render(<App name={name} subline={subline} />, mountNode);
}

export function stop(element: HTMLElement) {
  if (element) {
    ReactDOM.unmountComponentAtNode(element);
  }
}

export default App;
