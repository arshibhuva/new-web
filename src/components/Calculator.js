
import React, { useState } from 'react'
import css from '../css/style.css';


export default function Calculator() {
const [data, setdata] = useState('')
// const [prevoius, setprevoius] = useState('')
// const [operation, setoperation] = useState('')
   const btnclick = (n)=>
    {
     const val = n.target.value;

     if(val === '.' && data.includes('.'))return 
     setdata(data + val);
    }

    // const opratorclick =(e)=>
    // {
    //   if(data == '')return
    //   if(prevoius !== '')
    //   {
    //     let value = compute();
    //     setprevoius(value);
    //   }else
    //   {
    //     setprevoius(data);
    //   }
    //   // setdata('')
    //   setoperation(e.target.value)
    // }
    const delbtn =()=>
    {
        setdata(String(data.slice(0,-1)) )
    }
    const allclear =()=>
    {
      setdata('')
     
    }
    const equalclick =()=>
    {
     
     setdata(eval(data));
    };

    const compute =()=>
    {
      // let result;
      // let prevoiusnumber = parseFloat(prevoius)
      // let datanumber = parseFloat(data)
      // if(isNaN(prevoiusnumber) || isNaN(datanumber))
      // switch (operation) {
      //   case '+':
      //     result = prevoiusnumber + datanumber;
      //     break;
      //     default:return;
          
      //     break;
    
      // }return result;
    }
    return(
   <>
     <div className="container">
          <div className="calculater">
            <div className="display">
          
            
              <input type="text" id='ans' value={data} placeholder='0'/> 
            </div>
            <div className="btn">
                <input type="button" value="7" onClick={btnclick}/>
                <input type="button" value="8" onClick={btnclick}/>
                <input type="button" value="9" onClick={btnclick}/>
                <input type="button" value="DEL" className='del' onClick={delbtn}/>
            </div>
            <div className="btn">
                <input type="button" value="4" onClick={btnclick}/>
                <input type="button" value="5" onClick={btnclick}/>
                <input type="button" value="6" onClick={btnclick}/>
                <input type="button" value="+" onClick={btnclick}/>
            </div>
            <div className="btn">
                <input type="button" value="1" onClick={btnclick}/>
                <input type="button" value="2" onClick={btnclick}/>
                <input type="button" value="3" onClick={btnclick}/>
                <input type="button" value="-"onClick={btnclick}/>
            </div>
            <div className="btn">
                <input type="button" value="." onClick={btnclick}/>
                <input type="button" value="0" onClick={btnclick}/>
                <input type="button" value="/" onClick={btnclick}/>
                <input type="button" value="*" onClick={btnclick}/>
            </div>
            <div className="btn last-btn">
                <input type="button" value="RESET" className='del' onClick={allclear}/>
                <input type="button" value="=" onClick={equalclick}/>
            </div>
          </div>
        </div>
   </>
  )
}
