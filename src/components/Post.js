import './Post.css'
//post: start, end, image, date, description



const Post = ({trip}) => {
  return (
    <div className = "post">
      <h3>Trip: {trip.from} to {trip.destination}</h3>
      <p className = "date">
        Date: {trip.date}
      </p>
      <p className = "descrip">
        Description: {trip.description}
      </p>
    </div>
  )
}

export default Post