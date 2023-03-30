//5 import the sqaure from the components and now replace what we had before with the "Square" components
import Square from "./components/Square"


 function Board() {

  //13 lifting state up, now we want to check for a winner
  // in order to do that, the board needs to know the state of the 9 Square components 
  // How do we do this? 
  // TO COLLECT DATA FROM MULTIPLE CHILDREN, DECLARE THE SHARED STATE IN THE PARENT COMPONENT INSTEAD - Which is the board

  //14 now we creata an Array(9).fill(null) meaning we create an array in which all the sqaures are initially null 
  const [squares, setSquares] = useState(Array(9).fill(null))





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
    <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>



    </>
  )
}



export default Board