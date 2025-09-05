import Header from "./Hader";
import Label from "./shared/Label";
import Input from "./shared/Input";
import Details from "./shared/Details";
import Buton from "./shared/Button";
import Props from './Props'
import { useState } from "react";
function App (){

    //this is array of objects note: we should use useState to make it dynamic
  //by use API we can fetch data from backend and set it to this array
const  [Users,setUser]=useState([
    { id: 1, name: "John", age: 20, city: "New York" },
    { id: 2, name: "Alice", age: 22, city: "Los Angeles" },
    { id: 3, name: "Michael", age: 25, city: "Chicago" },
    { id: 4, name: "Sophia", age: 23, city: "Houston" },
    { id: 5, name: "David", age: 24, city: "Phoenix" }  
  ]);


  return (
    <div className="container mx-auto p-4 border border-gray-300 rounded mt-4">
      <Header />
    <div className="container mx-auto p-4">
      <Label text="Full Name: " />
      <Input />
      <Label text="Age: " />
      <Input />
      <Label text="Details: " />
      <Details />
      <br></br>
      <Buton text="Submit" />
    </div>

    <div className='container'>

     {
                 Users.map((user)=>
                <Props name={user.name} age={user.age} key={user.id}/> 
                          )
     }

    </div>
    </div>
  )
}
export default App;