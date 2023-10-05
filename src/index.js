import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//자습서에 복붙하지말고 하나씩 치라고 해서 하나씩 침
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  // ??? 여기에서 render를 쓰는 이유가 react가 가상DOM에서 실제DOM업데이트 하라는 뜻?? 그럼 컴포넌트의 상태 or 속성이 변경 되면 render method로 반환된 요소를 기반으로 DOM업뎃?
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.setState({ value: "X" });
          console.log("click");
        }}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Square: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player: X";
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/*status*/}</div>
          <ol>
            {/*
        Todo*/}
          </ol>
        </div>
      </div>
    );
  }
}

// ======================================== 이 아래 부분이 무슨뜻임?

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
