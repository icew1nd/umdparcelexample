import * as React from "react";

interface Props {
  name: string;
  subline: string;
}

class App extends React.Component<Props> {
  render() {
    const { name, subline } = this.props;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          margin: 24
        }}
      >
        <div
          style={{
            border: "1px solid #e2e2e2",
            borderRadius: 6,
            padding: 24,
            paddingBottom: 48,
            width: 600
          }}
        >
          <h3>Hello {name}</h3>
          <div>{subline}</div>
        </div>
      </div>
    );
  }
}

export default App;
