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
    <div>
      <form onSubmit={onSubmit}>
        <div className="txt_field">
          <input type="text" placeholder="What's your next trip?" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
        </div>
        <input type="submit" value="submit"/>
      </form>
      <ImageSlider slides={SliderData}/>
    </div>
  )
}

export default Home