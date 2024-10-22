import logo from './logo.svg';
import './App.css';

function Square({value}) { 
  return(
    <>
     {/*This is the way to write a comment */}
     <button className="square">{value}</button>
     </>
  );
}

export default function Board() {

  return (
    // <>

    //   {/*React can only return a single JSX element! So we
    //    need to wrap it up in a fragment*/}
    //   <div className="board-row">
    //     <button className="square">1</button>
    //     <button className="square">2</button>
    //     <button className="square">3</button>
    //   </div>
    //   <div className="board-row">
    //     <button className="square">4</button>
    //     <button className="square">5</button>
    //     <button className="square">6</button>
    //   </div>
    //   <div className="board-row">
    //     <button className="square">7</button>
    //     <button className="square">8</button>
    //     <button className="square">9</button>
    //   </div>

    // </>

    <> {/* This close bracket fetches the value of 1 from Square function
      above in order to fill the board below with 1  */}
      {/* Note that function  names MUST have capitalized first letters */}

      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    
    </>
  );
}

