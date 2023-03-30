// 4 Create a new Sqaure component


//6 now we need to pass in the value props
function Square({value}) {
    return <button className="square">{value}</button>;
  }

export default Square