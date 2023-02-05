import { useState } from "react"
import "./form.css"


const AddPost = ({ onAdd }) => {
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  const [image, setImage] = useState(null)
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const handleChange = (image) => {
    setImage(image);
  }

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

    onAdd({ start, end, image, date, description })

    setStart('')
    setEnd('')
    setImage('')
    setDate('')
    setDescription('')
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div>
        <label>Start Location</label>
        <div className="txt_field"> 
        <input type="text" placeholder="Where did your trip start?" value={start} onChange={(e) => setStart(e.target.value)}/>
      </div>
      <div className="txt_field">
        <label>End Location</label>
        <input type="text" placeholder="Where did your trip end?" value={end} onChange={(e) => setEnd(e.target.value)}/>
      </div>
      <div>
        <label>Upload an Image</label>
        <input type="file" name="image" value={image} placeholder="Choose File" onChange={handleChange}/>
      </div>
      <div className="txt_field">
        <label>Date</label>
        <input type="text" placeholder="When did you go on your trip?" value={date} onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div className="txt_field">
        <label>Description</label>
        <input type="text" placeholder="Please provide a short description of your trip" value={description} onChange={(e) => setDescription(e.target.value)}/>
      </div>

      <input type="submit" value="Upload Post"/>
    </form>
  )
}

export default AddPost