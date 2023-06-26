// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {each} = props
  const {title, description, publishedDate} = each
  return (
    <li>
      <div className="head">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr />
    </li>
  )
}
export default BlogItem
