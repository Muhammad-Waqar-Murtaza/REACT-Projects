import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Create() {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Waqar')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()

    const blog = {title, body, author}
    console.log(blog)

    setIsPending(true)

    fetch('http://localhost:8000/blogs', {
    method: 'POST',
    headers: {'content-Type' : 'application/json'},
    body: JSON.stringify(blog)
    }).then(()=>{
      console.log('blog added')
      setIsPending(false)
      navigate('/')
    })

    setTitle('')
    setBody('')
  }

  return (
    <div className='create'>
      <h2>Add a new Blog</h2>
    <form onSubmit={handleSubmit}>
      <label>Blog Title:</label>
      <input type="text"
        required
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
          }}/>
      <label>Blog Body:</label>
      <textarea 
        required 
        value={body} 
        onChange={(e)=>{
          setBody(e.target.value)
          }}>
      </textarea>

      <label>Blog Author:</label>
      <select 
        value={author} 
        onChange={(e)=>{
          setAuthor(e.target.value)
          }}>
        <option value="Waqar">Waqar</option>
        <option value="Bilal">Bilal</option>
      </select>
      { !isPending && <button type='submit'>Add Blog</button> }
      { isPending && <button type='submit'>Adding Blog...</button> }
    </form>

    </div>
  )
}

export default Create