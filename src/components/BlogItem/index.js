// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogList} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogList

  return (
    <Link className="blog-item-link" to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <img className="blog-item-image" src={imageUrl} alt={`item${id}`} />
        <div className="blog-text-items-container">
          <p className="blog-item-topic-text">{topic}</p>
          <h1 className="blog-item-title-text">{title}</h1>
          <div className="blog-item-author-item">
            <img
              src={avatarUrl}
              className="blog-item-avatar-image"
              alt={`avatar${id}`}
            />
            <p className="blog-item-author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
