import React, { startTransition } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//자습서에 복붙하지말고 하나씩 치라고 해서 하나씩 침
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  //** 3-2. 게임완성하기- state 끌어 올리기, handleClick 함수(?) 만들기 */
  //** 3-3 불변성, slice는 원본 arry을 건드리지 않고 복사본을 따거나 특정 부분만 가져오는 arry를 만들 수 있음.

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }

  // 1. renderSquare 라는 함수가 아래에서 JSX로 불림.
  // 2. 내장된 DOM <button> 컴포넌트에 있는  onClick prop은 클릭 이벤트 리스너 설정하라고 함
  // 3. 버튼을 클릭하면 React는 Square의 render() 함수에 정의된 onClick 이벤트 핸들러를 호출함.
  // 4. 이벤트 핸들러는 this.props.onClick() 를 호출합니다. Square의 onClick prop은 Board에서 정의됨.
  // 5. Board에서 Square로 onClick={() => this.handleClick(i)} 를 전달했기 때문에 Square를 누르면 Board의 handleClick(i)를 호출

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner:" + winner;
    } else {
      status = "Next Player: " + (this.state.xIsNext ? "X" : "O");
    }

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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
    };
  }
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
