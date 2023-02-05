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
      setTrips(data.docs.map((doc) => ({...doc.data, id: doc.id})))
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