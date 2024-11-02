// import Message from './Message'
// import ListGroup from './components/ListGroup';
import { useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'



function App(){
  // return <div> <Message /></div>

//   let items=[
//     'Nairobi',
//     'Nakuru',
//     'Mombasa',
//     'Nyeri',
//     'Kisumu',    
// ]
//  const handSelectItem = (item:string) =>{
//    console.log(item);
//  }

//   return (
//   <div>
//     <ListGroup items ={items} heading="Cities" onSelectItem={handSelectItem}/>
//     </div>
//   );

const [alertVisible, setAlertVisible] =useState(false)



return (
  <>
   <div>
     {alertVisible && < Alert onClose={() => setAlertVisible(false)}> 
    My Alert
     </Alert>}    
   </div>
   <div>
    <Button onClick={()=> setAlertVisible(true)}>
      Click Me
     </Button>
   </div>
 </>

   
)

}

export default App