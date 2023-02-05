import {useState, useEffect} from "react"
import { db } from "../firebase-config"
import {getDocs, collection} from "firebase/firestore"
import Posts from '../components/Posts'

const Search = ({ search }) => {
  const [trips, setTrips] = useState([])
  const usersCollectionRef = collection(db, "trips")

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
  return (
    <div>
      {trips.length > 0 ?(
        <Posts trips = {trips}/>
      ) : ("No posts to show")}
    </div>
  )
}

export default Search