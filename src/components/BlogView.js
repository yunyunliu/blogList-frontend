import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { likeBlog, deleteById } from '../reducers/blogsReducer'

const BlogView = () => {
  const dispatch = useDispatch()
  const blogId = useParams().id
  const blog = useSelector(state => state.blogs.find(blog => blog.id === blogId))

  const handleLike = () => {
    const dataObject = {
      ...blog,
      likes: blog.likes + 1
    }
    dispatch(likeBlog(dataObject))
  }

  if (blog) {
    return (
      <div><h2>{blog.title}</h2>
        <button onClick={() => dispatch(deleteById(blog.id))}>
        delete
        </button>
        <div className="details">
          url: {blog.url}
          <p> likes: {blog.likes}
            <button type="button" onClick={handleLike}>like</button>
          </p>
        </div>
        added by {blog.user.name}
      </div>
    )
  }
  return null
}

export default BlogView