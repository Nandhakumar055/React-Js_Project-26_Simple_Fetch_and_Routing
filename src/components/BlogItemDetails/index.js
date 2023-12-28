// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogsData: [],
    isLoader: true,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updateBlogItem = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      author: data.author,
      avatarUrl: data.avatar_url,
    }

    this.setState({
      blogsData: updateBlogItem,
      isLoader: false,
    })
  }

  renderBlogItemDetails = () => {
    const {blogsData} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogsData

    return (
      <div className="blog-item-details-main-container">
        <div className="blog-item-details-container">
          <h1 className="title-text">{title}</h1>
          <div className="author-item">
            <img src={avatarUrl} className="avatar-image" alt={author} />
            <p className="author-name">{author}</p>
          </div>
          <img className="blog-image" src={imageUrl} alt={title} />
          <p className="blog-content">{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state
    return (
      <div className="blog-list-container">
        {isLoader ? (
          <div data-testid="loader" className="loading-item">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
