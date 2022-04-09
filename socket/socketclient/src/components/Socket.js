import React ,{useEffect,useState} from 'react'
import { io } from "socket.io-client";

const Socket = () => {
    const [state,setState]=useState("");
    const [socketObj,setSocketObj]=useState({});
    const [data,setData]=useState([]);



    useEffect(()=>{

        const socket = io(process.env.REACT_APP_SOCKET_URL);
        setSocketObj(socket);


        socket.on("received",(res)=>{
           
            data.push(res);
            setData([...data]);
      })
},[])


    const handleChange=(event)=>{
        setState(event.target.value);
        // If we wnat 

    }
    const click=()=>{

        socketObj.emit("message",{message:state});



        //

    }



  return (
    <div className='row'>

<div  className='col-4 offset-2'>

    <input type="text" className="form-control" onChange={handleChange}/> <br/>

    <button className='btn btn-primary' onClick={click}>
    
    Send Message

    </button>


    </div>     
    <div  className='col-4 offset-2'>

{
    data.map(ele=>(
        <div className="alert alert-primary" role="alert">
 {ele.message}
</div>


    ))
}
   


    </div>   

    </div>
  )
}

export default Socket