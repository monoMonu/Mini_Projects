import {useState} from 'react'

function Square({value, onSquareClick}){
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  )
}

export default function Game(){

  const [nextIsX, setNextIsX] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length-1];

  function handlePlay(nextSquares){
    setHistory([...history, nextSquares]);
    setNextIsX(!nextIsX);
  }

  function restartGame(){
    setNextIsX(true);
    setHistory([Array(9).fill(null)]);
  }

  function goToPrev(){
    setNextIsX(!nextIsX);
    const copyHistory = history.slice();
    copyHistory.pop();
    setHistory(copyHistory);
  }

  const winner = checkWinner(currentSquares);
  let status;
  if(winner)
    status = `Winner : ${winner}`;
  else 
    status = `${nextIsX ? 'X' : 'O'}'s Turn`;

  return (
    <section className='game'>
        <div className='status'>{status}</div>
        <Board nextIsX={nextIsX} squares={currentSquares} onPlay={(nextSquares)=>handlePlay(nextSquares)}/>
        <div className='controlBtns'>
          {history.length>1 && <button className='btn' onClick={goToPrev}>Previous Move</button>}
          {history.length>1 && <button className='btn' onClick={restartGame}>Restart</button>}
        </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </section>
  )
}

function Board({nextIsX, squares, onPlay}) {

  function handleClick(i){
    if(squares[i] || checkWinner(squares)) return;
    const copySquares = squares.slice();
    copySquares[i] = nextIsX ? 'X' : 'O';
    onPlay(copySquares);
  }

  return (
    <div className='board'>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={()=>handleClick(3)} />
        <Square value={squares[4]} onSquareClick={()=>handleClick(4)} />
        <Square value={squares[5]} onSquareClick={()=>handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={()=>handleClick(6)} />
        <Square value={squares[7]} onSquareClick={()=>handleClick(7)} />
        <Square value={squares[8]} onSquareClick={()=>handleClick(8)} />
      </div>
    </div>
  )
}

function checkWinner(squares){
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let i=0; i<winCombos.length; i++){
    const [a, b, c] = winCombos[i]; 
    if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
      return squares[a];
    }
  }
  return null;
}
