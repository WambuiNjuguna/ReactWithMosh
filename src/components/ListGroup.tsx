// import {Fragment} from "react";
// import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;

  onSelectItem:(item:string) => void;
}


function ListGroup({items, heading, onSelectItem}: Props){

// let items=[
//     'Nairobi',
//     'Nakuru',
//     'Mombasa',
//     'Nyeri',
//     'Kisumu',    
// ] This is moved to app.tsx because we want to have various lists


// items=[] this is the code to test whether the ternary operation was working with no items found
//the && is a replacement for the ternary operation. if you type it on console you can see like true && 2 you will get 2

// if (items.length===0)
//     return (
//     <>
//         <h1>List</h1>
//         <p>No item found</p>
//     </>
//     );


//Event handler
// const handleClick =(event: MouseEvent)=> console.log(event )
//  let selectedIndex= 0;

 //Hook- allows you to use built-in features in react
 const [selectedIndex, setSelectedIndex ] = useState(-1);
 //arr[0] // variable (selectedIndex)
 // arr[1] //updater function. Instead of using these you use the selectedIndex and setSelectedIndex

  return ( 
    <>
    <h1>{heading}</h1>
    {/* {items.length ===0 ? <p>No items found</p> : null} */}
    {items.length ===0 && <p>No items found</p> }
    
  <ul className="list-group">
    {items.map((item, index)=> 
    <li 
    className={selectedIndex === index? 'list-group-item active' : 'list-group-item'}
    key={item} 
    onClick={() =>{
      setSelectedIndex(index);
      onSelectItem(item)
       }}
     >
    {item}
    </li>)}
      
      {/* <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li> */}
  </ul>
 </>
 );
}

export default ListGroup