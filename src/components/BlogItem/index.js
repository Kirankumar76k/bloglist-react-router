// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, description, publishedDate} = blogDetails
  return (
    <li key={id} className="item">
      <div className="name-time-container">
        <h1 className="name-head">{title}</h1>
        <p className="publish-date">{publishedDate}</p>
      </div>
      <p className="description-item">{description}</p>
    </li>
  )
}
export default BlogItem
