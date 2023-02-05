import { useState } from "react"
import "./form.css"
import {addDoc, collection} from "firebase/firestore"
import { db } from "../firebase-config"

const AddPost = () => {
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  //const [image, setImage] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const usersCollectionRef = collection(db, "trips")

  const createTrip = async () => {
    await addDoc(usersCollectionRef, {from: start, destination: end, date: date, description: description});
    console.log("I did it")
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
    // if(!image) {
    //   alert("Please add an image")
    //   return
    // }

    if(!date) {
      alert("Please add a date")
      return
    }
    if(!description) {
      alert("Please add a description")
      return
    }

    createTrip()
    //onAdd({ start, end, image, date, description })

    setStart('')
    setEnd('')
    //setImage(null)
    setDate('')
    setDescription('')
  }

  return (
    <div className="center">
    <form className="add-form" onSubmit={onSubmit}>
        <div className="txt_field"> 
        <input type="text" placeholder="Where did your trip start?" value={start} onChange={(e) => {setStart(e.target.value)}}/>
      </div>
      <div className="txt_field">  
        <input type="text" placeholder="Where did your trip end?" value={end} onChange={(e) => {setEnd(e.target.value)}}/>
      </div>
      <div className="txt_field">  
        <input type="text" placeholder="When did you go on your trip? (MM/DD/YYYY)" value={date} onChange={(e) => {setDate(e.target.value)}}/>
      </div>
      <div className="txt_field">  
        <input type="text" placeholder="Please provide a short description of your trip" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
      </div>
      {/*
      <div>
      {image && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(image)} />
        <br />
        <button onClick={()=>setImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          setImage(event.target.files[0]);
        }}
      /> 
    </div>
      */}
      <input type="submit" value="submit"/> 
    </form>
    </div>
  )
}

export default AddPost