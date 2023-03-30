//5 import the sqaure from the components and now replace what we had before with the "Square" components
import Square from "./components/Square"


 function Board() {
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
    <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>



    </>
  )
}



export default Board