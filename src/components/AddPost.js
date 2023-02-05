import { useState } from "react"
import "./form.css"


const AddPost = () => {
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  const [image, setImage] = useState(null)
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    if(!start) {
      alert("Please add a start location")
      return
    }
    if(!end) {
      alert("Please add an end location")
      return
    }
    if(!image) {
      alert("Please add an image")
      return
    }
    if(!date) {
      alert("Please add a date")
      return
    }
    if(!description) {
      alert("Please add a description")
      return
    }

    //onAdd({ start, end, image, date, description })

    setStart('')
    setEnd('')
    setImage(null)
    setDate('')
    setDescription('')
  }

  return (
    <div className="center">
    <form className="add-form" onSubmit={onSubmit}>
        <div className="txt_field"> 
        <input type="text" placeholder="Where did your trip start?" value={start} onChange={(e) => setStart(e.target.value)}/>
      </div>

      <div className="txt_field">  
        <input type="text" placeholder="Where did your trip end?" value={end} onChange={(e) => setEnd(e.target.value)}/>
      </div>

      

      <div className="txt_field">  
        <input type="text" placeholder="When did you go on your trip?" value={date} onChange={(e) => setDate(e.target.value)}/>
      </div>

      <div className="txt_field">  
        <input type="text" placeholder="Please provide a short description of your trip" value={description} onChange={(e) => setDescription(e.target.value)}/>
      </div>

      <div>
        <label>Upload an Image</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
      </div>
    <br></br>
      <input type="submit" value="submit"/> 
    </form>
    </div>
  )
}

export default AddPost