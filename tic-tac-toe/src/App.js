//5 import the sqaure from the components and now replace what we had before with the "Square" components
import Square from "./components/Square"
import { useState } from "react";

 function Board() {

  //13 lifting state up, now we want to check for a winner
  // in order to do that, the board needs to know the state of the 9 Square components 
  // How do we do this? 
  // TO COLLECT DATA FROM MULTIPLE CHILDREN, DECLARE THE SHARED STATE IN THE PARENT COMPONENT INSTEAD - Which is the board

  //14 now we creata an Array(9).fill(null) meaning we create an array in which all the sqaures are initially null 
  const [squares, setSquares] = useState(Array(9).fill(null))

  //23 NOW ITS TIME TO ADD THE MAJOR FEATURE OF THE GAME, adding in the "O"
  const [xIsNext, setXIsNext] = useState(true);


  // 20 now we want to create a handleClick Function

  function handleClick(i) {
    // 21 here we are creating a copy of the squares array (nextSquares) with the slice method 
    // SO WE ARE RE-RENDERING BASED ON WHAT IS IN nextSquares
    // const nextSquares = squares.slice();
    // nextSquares[i] = 'X';
    //setSquares(nextSquares);




    //27 add in a calculate winner function call from the function below 
    if (calculateWinner(squares) || squares[i]) {
      return;
    }


    // 25 so we want to avoid clicking on a square multiple times, so what we cna do is add a return statement
    // IF it has already been clicked on 
    // if (squares[i]) {
    //   return;
    // }





    //24 now we need to edit the handleClick funciton to flip the value of xIsNext
    const nextSquares = squares.slice();
    // basdically here first if we see above, xIsNext is initally set to "true", therefore the first click is 
    // set to be "X"
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    // then once clicked, we want to make the next click to NOT be xIsNext so itll be false and O will be put down
    setSquares(nextSquares);
    setXIsNext(!xIsNext);


    
  }













  //3 note that you need to put children tags within a parent tag as you see here 
  return (
    <>
    {/* 7 now we want to add in the props value with the number, this is like our FUNCTION call with an argument */}
    {/* <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div> */}
    
    {/* 10 now we dont need to add the props anymore because we have the useStates that will set the values of the sqaures */}
    {/* <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div> */}

    {/* 15 now we want to be able to pass the value prop down to each square that it renders */}
    {/* <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div> */}
  
      {/* 22 now we can add in calling the handleClick from the arrow functions we pass */}
      {/* onSquareClick is like any prop but instead of passing it a value we pass it a function */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>


    </>
  )
}




// 26 We want to add in a function that will handle the winner 
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
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}








export default Board