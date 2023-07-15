import React from "react";
import Game from "./components/game";

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="boxer">
          <Game />
        </div>
      </>
    );
  }
}
