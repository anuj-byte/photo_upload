import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'

const ImageUpload = ()=>{
  const[newUser,setNewAuthor]=useState(
    {
      name:'',
      photo:''
    }
 
  );

  const handleChange = (e) =>{
    setNewAuthor({...newUser,[e.target.name]:e.target.value})
  }
  const handlePhoto = (e)=>{
    setNewAuthor({...newUser,photo:e.target.files[0]});
    console.log(newUser.photo);
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const formData=new FormData();
    formData.append('photo',newUser.photo);
    formData.append("name",newUser.name);
    console.log(newUser.photo)
    axios.post("http://localhost:3001/users/add/",formData)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
 /* const handleViews =(e)=>{
    e.preventDefault()
    axios.get("http://localhost:3001/users/rec")
         .then(res=>{
          setNewPhotos(res.data)
          console.log(Photos)
          console.log(res)
         })
         .catch(err=>{
          console.log(err)
         })
  }*/
 /* useEffect(() => {
    const getProductsData = async () => {
   
    const { data } = await axios.get("http://localhost:3001/users/rec")
        console.log(data)
        setData(data)
    }
    getProductsData()
}, [])*/

  return(
    <form onSubmit={handleSubmit} encType='multipart/form-data'>
      <input type="file" accept=".png ,.jpg,.jpeg" name='photo' onChange={handlePhoto} />
      <input type="text" placeholder='name' name="name" value={newUser.name} onChange={handleChange}/>
      <div className='bg'>
    
      </div>
     
      <input type="submit" />
    </form>
  )
}

  
 

export default ImageUpload;
