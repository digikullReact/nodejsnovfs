import React,{useState,useEffect} from 'react'

import axios from "axios";
const File = () => {
    const [state,setState]=useState({
        name:"",
        subject:"",
        image:""
    })

  const [data,setData]=useState([]);  


    useEffect(()=>{

        axios.get("http://localhost:9090/auth/getAll").then(data=>{

        setData(data.data["data"]);

        }).catch(err=>{
            console.log(err);
        })

    },[])





    // text fields
    const handleChange=(e)=>{

        setState({...state,[e.target.name]:e.target.value})

    }

    const onFileChange=(e)=> {
        setState({image:e.target.files[0]})
      }

    const fileUpload=()=>{


        const formdata=new FormData();

        formdata.set("file",state.image);
        formdata.set("name",state.name);
        formdata.set("subject",state.subject);

        axios.post("http://localhost:9090/file/upload",formdata).then(data=>{
            console.log(data);

        }).catch(err=>{
            console.log(err);
        })




    }

  return (
      <div>

<div className='row' style={{marginTop:"100px"}}> 

<div className='col-4 offset-4'>

<input type="file" className='form-control' onChange={onFileChange}/> <br/>

<input type="text" name='name' className='form-control'  onChange={handleChange}/> <br/>

<input type="text" name='subject' className='form-control' onChange={handleChange}/> <br/>

<button className='btn btn-primary' onClick={fileUpload}>

    Upload

</button>

</div>



</div>

<div className='row'> 

{
    data.map(ele=>(

        <div className='col-4'>

<div class="card" >
  <img src={"http://localhost:9090/"+ele.image?.split("uploads")[1]} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

        </div>


    ))
}


</div>
      </div>
  
  )
}

export default File