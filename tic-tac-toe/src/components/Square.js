// 4 Create a new Sqaure component

// 9 As a next step, you want sqaure component to "remember" that it got clicked and fill it in with an "X" mark
// To "Remember" things, components use states 
import { useState } from 'react';









//6 now we need to pass in the value props
// 12 now once we start using states we dont need the props
// 17 that means we will now need to add in props, because we moved the states to the PARENT level 
function Square({value}) {
    //9// Remember that we used value below 
    // 16 now we can get rid of the state in teh INDIVIDUAL sqaure component
    // const [value, setValue] = useState(null);



   //8 lets fill the square component with an X when we click on it, 
   // Declare a handleClick inside of the square
   
   function handleClick() {
    //11 instead of console.log click we can change the state to setValue('X")
    console.log('clicked!');
    setValue('X');
    }
   
    return(
    <button 
    className="square"
    //9 add in an onClick Attribute 
    onClick ={handleClick}
    >
        {value}
    </button>
    )
  }

export default Square