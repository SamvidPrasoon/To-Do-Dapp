import React from 'react';
import '../App.css';
import web3 from '../web3';
import todo from '../Todo'
const Content = ({index,data,setLoader,task,setTask}) => {

    const update = async(idx)=>{
      setLoader(true)
      const accounts = await web3.eth.getAccounts()
        await todo.methods.updateTask(task,idx).send({from:accounts[0]})
      setLoader(false)
      setTask('')
            
    }
    
    const del = async(idx)=>{
      setLoader(true)
      const accounts = await web3.eth.getAccounts()
        await todo.methods.deleteTask(idx).send({from:accounts[0]})
      setLoader(false)
      setTask('')
    }
  



    return (  
      
     
<div style={{position:'relative',backgroundColor:'#EAEAEA',borderRadius:'10px',width:'500px',height:'50px',display:'flex',alignItems:'center'}} className='mt-5 '>
       
<h5 className='p-2'>{data[1]}</h5>
<div className='p-2 res' style={{position:'absolute',bottom:'-30px',right:'-5px'}}>
  <button onClick={()=>del(index)} className='btn btn-danger' style={{borderRadius:'10px'}}><i class="fa-solid fa-check"></i>  </button>
  </div>
  <div className='p-2' style={{position:'absolute',bottom:'-30px',left:'-5px'}}>
  <button onClick={()=>update(index)} className='btn btn-dark' style={{borderRadius:'10px'}}><i class="fa-solid fa-pen fa-xs"></i></button>
  </div>

</div> 
     
    );
}
 
export default Content;

