import React, { useState } from 'react'
import css from '../css/style2.css';

export default function Calculator2() {
    var val;
const [data, setdata] = useState('')
// const [result, setresult] = useState('')
    const clickhandle = (e) =>
    {
        var value = e.target.value;
        if(val === '.' && data.includes('.'))return 
        setdata(data + value);
    }
    const clearbtnhandle =()=>
    {
        setdata('')
    }
    const delhandle =()=>
    {
        setdata(String(data.slice(0,-1)))
    }
    const operatorkhandle =(e)=>
    {
        
        var val = e.target.value;
        setdata(data + val);
        // setdata(eval(data));
        // setoperator()
        // setdata(eval(data));
       
    }
    const equalhandle=()=>
    {
        try
        {
            setdata(eval(data));
        }catch(error)
        {
            setdata('ERROR')
        }
        
    //     setresult(val);
    //     // var operations = e.target.value;
    //     setdata('')
      
    //    let previousNumber = parseFloat(data);
    // let currentNumber = parseFloat(data);
    //    switch (val) {
    //     case "÷":
    //       result = previousNumber / currentNumber;
    //       setresult(result);
    //       break;
    //     case "x":
    //       result = previousNumber * currentNumber;
    //       setresult(result);
    //       break;
    //     case "+":
    //       result = previousNumber + currentNumber;
    //       setresult(result);
    //       break;
    //     case "-":
    //       result = previousNumber - currentNumber;
    //       setresult(result);
    //       break;
    //     default:
    //       return;
    //   }
    }
    return (
        <>
            <div className="container">
                <div className="calculator">
                    <input type="text" placeholder='0' id='and' value={data} className='display' />
                    <input type="button" value={'CL'} className='btn del' onClick={clearbtnhandle} />
                    <input type="button" value={'DEL'} className='btn del' onClick={delhandle}/>
                    <input type="button" value={'%'} className='btn op' onClick={clickhandle}/>
                    <input type="button" value={'/'} className='btn op'  onClick={clickhandle}/>
                    <input type="button" value={'7'} className='btn' onClick={clickhandle}/>
                    <input type="button" value={'8'} className='btn' onClick={clickhandle} />
                    <input type="button" value={'9'} className='btn' onClick={clickhandle}/>
                    <input type="button" value={'*'} className='btn op'  onClick={clickhandle}/>
                    <input type="button" value={'4'} className='btn' onClick={clickhandle}/>
                    <input type="button" value={'5'} className='btn' onClick={clickhandle}/>
                    <input type="button" value={'6'} className='btn' onClick={clickhandle}/>
                    <input type="button" value={'-'} className='btn op' onClick={clickhandle}/>
                    <input type="button" value={'1'} className='btn' onClick={clickhandle}/>
                    <input type="button" value={'2'} className='btn' onClick={clickhandle}/>
                    <input type="button" value={'3'} className='btn' onClick={clickhandle}/>
                    <input type="button" value={'+'} className='btn op'  onClick={clickhandle}/>
                    <input type="button" value={'.'} className='btn' onClick={clickhandle} />
                    <input type="button" value={'0'} className='btn' onClick={clickhandle}/>
                    <input type="button" value={'='} className='btn op equl' onClick={equalhandle}/>
                </div>
            </div>
        </>
    )
}
