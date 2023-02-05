import { useState, useEffect} from "react"
import Posts from '../components/Posts'
import {getDocs, collection} from "firebase/firestore"
import { db } from "../firebase-config"

const Explore = () => {
  const [trips, setTrips] = useState([]);
  const usersCollectionRef = collection(db, "trips")
  
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(usersCollectionRef)
      let arr = [];
      data.forEach((res) => {
        if (res.data() != null) {
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
  }, []);

  return (
    <div>
      {trips.length > 0 ?(
        <Posts 
          trips = {trips}
        />
      ) : (
        'No Posts to Show'
      )}
    </div>
  )
}

export default Explore