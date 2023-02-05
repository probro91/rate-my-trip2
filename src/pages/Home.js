import ImageSlider from "../components/ImageSlider"
import { SliderData } from '../components/SliderData'
import Post from "../components/Post"
import {useState} from "react"


const Home = () => {
  const [search, setSearch] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    if(!search) {
      alert("Please search for a trip!")
      return
    }

    setSearch('')
  }
  return (
    <div className="parent">
      <ImageSlider className="child" slides={SliderData}/>
      <form className="child" onSubmit={onSubmit}>
        <div className="txt_field">
          <input type="text" placeholder="What is your next trip?" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
        </div>
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default Home