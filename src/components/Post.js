//post: start, end, image, date, description


var postStyle = {
  display: 'flex',  
  fontSize: '13px',
  width: '100%',
  backgroundColor: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "left",
  padding: "20px",
  position: "relative",
  height: "15vh",
  width: "90%",
  overflowY:'scroll',
  color: 'black',
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