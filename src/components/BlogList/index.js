// Write your JS code here
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    return (
      <ul className="list-container">
        {blogsList.map(each => (
          <BlogItem each={each} key={each.id} />
        ))}
      </ul>
    )
  }
}

export default BlogList
