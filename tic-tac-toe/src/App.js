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




  // 20 now we want to create a handleClick Function

  function handleClick(i) {
    // 21 here we are creating a copy of the squares array (nextSquares) with the slice method 
    // SO WE ARE RE-RENDERING BASED ON WHAT IS IN nextSquares
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
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



export default Board