import Post from './Post'

const Posts = ({trips}) => {
  return (
    <>
        {trips.map((trip, index) => (
            <Post key = {index} trip = {trip} />
        ))}
    </>
  )
}

export default Posts