import ImageSlider from "../components/ImageSlider"
import { SliderData } from '../components/SliderData'
import {useState} from "react"
import { useNavigate } from "react-router-dom"


const Home = () => {
  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()

    if(!search) {
      alert("Please search for a trip!")
      return
    }

    setSearch('')
    navigate("/search", {search})
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