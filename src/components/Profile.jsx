  import {useState,useEffect} from "react"
import axios from "axios"


const Profile = () => {

  const[state,setState] = useState("")

  const [files,setFiles] = useState("")

    const onHandleDelete = (clicked) => {
    axios.put("https://login-backend-final.onrender.com/delete",clicked.link).then(data=> {
      console.log(data)
    }).catch(err=> {
      console.log(err)
    })
  }





  useEffect(()=> {
    axios.get("https://login-backend-final.onrender.com/files").then(res=> {
      let mapped = res.data.data[0].file.map((ele)=> {
        return (
          <div> <a href= {ele.link} target = "_blank">{ele.link}</a> <button onClick = {()=> {
            onHandleDelete(ele)
          }}>
            Delete
          </button></div>
        )
      })

      setFiles(mapped)

      console.log(mapped)
    })
  })

  const onHandleChange = (event) => {
    setState(event.target.files[0])

    console.log(state)
  }

  const onHandleupload = () => {
  

  const formData = new FormData()

  formData.append("file",state)

    axios.post("https://login-backend-final.onrender.com/upload",formData).then(data=> {
      console.log(data.data)

      axios.put("https://login-backend-final.onrender.com/mongoUpdate")
    }).catch(err=> {
      console.log(err)
    })

    }








  return (
    <div style={{margin:"auto",width:"600px",backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
    }}>
      <h5>Hello {localStorage.getItem("name")}</h5>


      <h6>Upload your personal files</h6>

    

<div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02" name = "file" onChange = {onHandleChange}/>

  </div>
  

      <button type="button" class="btn btn-primary" onClick = {onHandleupload}>Upload</button>


      <div>

        {
          files
        }
      
      </div>
  
    </div>
  )
}

export default Profile