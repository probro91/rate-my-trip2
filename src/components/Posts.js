import Post from './Post'

const Posts = ({trips}) => {
  return (
    <>
        {trips.map((arr, index) => (
            <Post key = {index} trip = {arr} />
        ))}
    </>
  )
}

export default Posts