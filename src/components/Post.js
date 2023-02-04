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

var post = {
  display: 'flex',  
  fontSize: '13px',
  width: '50%',
}
const Post = ({ post,childern }) => {
  return (
    <div style={post}>
      <h3>Trip: {post.start} to {post.end}</h3>
      <img src={post.image} alt="Trip Picture" width="100" height="100"></img>
      <p>
        Date: {post.date}
        Description: {post.description}
      </p>
    </div>
  )
}

export default Post