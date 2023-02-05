import ImageSlider from "../components/ImageSlider"
import { SliderData } from '../components/SliderData'
import {useState, useEffect} from "react"
import { db } from "../firebase-config"
import {getDocs, collection} from "firebase/firestore"
import { useNavigate } from "react-router-dom"


const Home = () => {
  const [search, setSearch] = useState("")
  const [trips, setTrips] = useState([])
  const usersCollectionRef = collection(db, "trips")

  const navigate = useNavigate()

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(usersCollectionRef)
      let arr = [];
      data.forEach((res) => {
        if (res.data().from == search) {
          arr.push({
            description: res.data().description,
            date: res.data().date,
            destination : res.data().destination,
            from: res.data().from
          })
        }
      })
      setTrips(arr)
    }

    getPosts()
  })

  const onSubmit = (e) => {
    e.preventDefault()

    if(!search) {
      alert("Please search for a trip!")
      return
    }

    setSearch('')
    navigate("/Search")
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