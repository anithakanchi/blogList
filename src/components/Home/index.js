import './index.css'
import {Component} from 'react'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

const blogsList = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Business schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Business schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]
class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <UserInfo />
        <ul>
          {blogsList.map(each => (
            <BlogList each={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
