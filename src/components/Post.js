//post: start, end, image, date, description
var postsBar = {
  backgroundColor: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "left",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "200px",
  width: "90%",
  overflowY:'scroll',
  color: 'black',
}

var postStyle = {
  display: 'flex',  
  fontSize: '13px',
  width: '50%',
}
const Post = ({trip}) => {
  console.log(trip.description)
  return (
    <div style={postStyle}>
      <h3>Trip: {trip.from} to {trip.destination}</h3>
      <p>
        Date: {trip.date}
        Description: {trip.description}
      </p>
    </div>
  )
}

export default Post