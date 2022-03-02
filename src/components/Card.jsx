import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import Content from './Content';
import web3 from '../web3';
import todo from '../Todo'
const Card = () => {
  const d =new Date();

const [count ,setCount] = useState(0);
const [task,setTask] = useState('')
const [contents,setContents] = useState([])
const [loader,setLoader] = useState(false)
 
useEffect(()=>{
  const fetchdata = async()=>{
    const num = await todo.methods.TaskCount().call();
    

    setCount(num)
  }
  fetchdata()
     
},[loader])
 const create = async()=>{
   setLoader(true)
   const accounts = await web3.eth.getAccounts()
     await todo.methods.createTask(task).send({from:accounts[0]})
   setLoader(false)
   setTask('')
 }

useEffect(()=>{
    const fetchdata = async()=>{
       const tasks =  await todo.methods.getTasks().call()
       setContents(tasks)

    }
    fetchdata()
},[loader]) 

    return (
      <React.Fragment>
      <div className=' mt-5 ' style={{position:'relative'}}> 
      <img style={{height:'150px',width:'700px', borderRadius:'20px'}} src="https://www.teahub.io/photos/full/280-2801679_photo-wallpaper-white-tower-trees-pink-mountain-4k.jpg" class="img-fluid" alt="..."></img>
      <div style={{position:'absolute',top:'8px',left:'5px',fontSize:'40px'}} class="top-left">To-Do LIST</div>
      <div style={{position:'absolute',bottom:'8px',left:'9px',fontSize:'20px'}} class="top-left text-light">

        <Moment format='D MMM YYYY'>
            {d}
        </Moment>
      </div>
      <div style={{position:'absolute',top:'8px',right:'10px',fontSize:'20px'}} class="top-left">Tasks-{count}</div>
      <div style={{position:'absolute',bottom:'-15px',right:'-10px',fontSize:'40px'}} class="top-left">
        <button onClick={create} style={{borderRadius:'25px'}} className='btn btn-primary'><i class="fa-solid fa-plus fa-lg"></i></button>
      </div>
      <div style={{position:'absolute',bottom:'-20px',right:'25%',fontSize:'40px'}} class="top-left input-group w-50">
        <input type='text' placeholder='Enter task to be created or Updated' className='form-control' value={task} onChange={(e)=>setTask(e.target.value)}/>
      </div>
       
       
 
      </div>
        {loader ? (<div class="spinner-border text-danger mt-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>):( <div style={{height:'500px',overflow:'scroll'}} className='example' >
         {contents.map((con,index)=>(
                 <Content  data={con} index={index} setLoader={setLoader} task={task} setTask={setTask}/>
         ))}
       
        </div>)}
       
 

      </React.Fragment>
     );
}
 
export default Card;
