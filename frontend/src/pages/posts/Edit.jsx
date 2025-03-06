import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import data from '../../data'

function Edit() {

    const params = useParams()

    // replace initializer function in useState with an object: {}
    // and fetch a single post (GET request) inside a useEffect instead 
    const [post, setPost] = useState(() => data.initPost(params.id))

    const navigate = useNavigate()

    const bodyRef = useRef()
    const subjectRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        let updatedPost = {
            subject: subjectRef.current.value,
            body: bodyRef.current.value,
            _id: Number(params.id) // can remove this
        }

        // replace with fetch (PUT request)
        data.updatePost(updatedPost)

        navigate(`/posts/${post._id}`)
    }

    return ( 
        <div>
            <h1>Edit Post</h1>
            <div className='buttons' style={{ flexDirection: 'column' }}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nme">Subject:</label><br />
                    <input type="text" id="nme" ref={subjectRef} defaultValue={post.subject} /><br /><br />

                    <label htmlFor="clr">Body:</label><br />
                    <textarea ref={bodyRef} id="clr" cols="30" rows="10" defaultValue={post.body} /><br /><br />

                    <button>Submit</button>
                </form>
                <Link to={`/posts/${post._id}`}>
                    <button>Back</button>
                </Link>
                
            </div>
        </div>
    );
}

export default Edit;