    import React from 'react'
    import Data from './components/accordation/Data';
    import { useState } from 'react';
    import './index.css'

    const Accordian = () => {
        const [selected,setSelected] = useState(null);
        const [enableMultiSelection, SetenableMultiSelection]
        =useState(false)
        const [multiple , setMultiple] = useState([])

        const HandleSingleSelection=(getcurrenId)=>{
            setSelected
            ( getcurrenId === selected? null:getcurrenId)
    console.log(getcurrenId)
            }
    const handleMultiSelection = (getcurrenId)=>{
                let copymult = [...multiple]
                const findIndexofCurrentId = 
                copymult.indexOf(getcurrenId)
                console.log(findIndexofCurrentId)
                if(findIndexofCurrentId === -1)
                    copymult.push(getcurrenId)
                else
                copymult.splice(findIndexofCurrentId , 1)
                setMultiple(copymult)
                
                }
                
    return (
        <div className='wrapper'>
        <div className='accordian'>
        <button onClick={() =>SetenableMultiSelection(
            !enableMultiSelection)}>Enable mutiple selection</button>
    <h1>React js Q & A</h1>
            { Data && Data.length >0 ?
        (Data.map((item) =>
            (
            <div className='item' key={item.id} >
            <div onClick={enableMultiSelection ?
                ()=>handleMultiSelection(item.id):()=>HandleSingleSelection(item.id)}
    className='title' >
    <h3>{item.question} <span>+</span></h3>
    </div>
    {
    enableMultiSelection ? multiple.indexOf(item.id)!== 
    -1 && <div className='content'>
    {item.answer}
    
    </div>:selected === item.id && <div className='content'>
    {item.answer}
    
    </div>
    }
    </div>  ))) :<div>No Data found</div>
        }
        </div>
        </div>
    )
    }

    export default Accordian
