import {useState} from 'react';

function MyButton(){
   return (
      <button className="btn"> My Counting</button>
   );
}

// Counter Button
function Counter({cc}){
   const [count, setCount] = useState(cc);
   return (
      <div>
         <button onClick={()=>{setCount(count-1)}} className="btn">Down</button>
         {count}
         <button onClick={()=>{setCount(count+1)}} className="btn">Up</button>
      </div>
   );
}


export {Counter};
export default MyButton;