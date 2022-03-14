import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { v4 as uuidv4 } from 'uuid';
export function Grocery(){
    
    const [groceries, setGroceries] = useState([])
    
    const deleteGrocery = (id)=>{
        const temp = [...groceries].filter((elem)=>
            elem.id !== id
        )
        setGroceries(temp)
    }
    const addGrocery =(item) =>{
        const itemObj = {id : uuidv4(), itemName : item}
        setGroceries([...groceries,itemObj])
    }
    return <>
    <GroceryInput addGrocery={addGrocery}/>
    {groceries.map((e, index)=>(  <GroceryList key = {e.id} props = {e}  onSelect = {deleteGrocery}/>))}
    </>
}