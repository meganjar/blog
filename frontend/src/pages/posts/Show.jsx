import { useEffect, useState, useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import data from "../../data"

function Show() {

    const params = useParams()

    // replace initializer function in useState with an object: {}
    // and fetch a single post (GET request) inside a useEffect instead 
    const [post, setPost] = useState(() => data.initPost(params.id))

    const navigate = useNavigate()
    const bodyRef = useRef()
    const detailsRef = useRef()

    function handleDeleteComment(comment) {
        // setPost(updatedPost)
    }

    function handleDeletePost() {

        // replace with fetch (DELETE request)
        data.deletePost(params.id)
        
        navigate('/posts')
    }

    function handleSubmitComment(e) {
        e.preventDefault()
        // setPost(updatedPost)
        // bodyRef.current.value = ''
        // detailsRef.current.open = false
    }

    return (
            <div>
                <div className="a-post">
                    <h2>{post.subject}</h2>
                    <h5 style={{ opacity: '.3'}}>Posted by {post.user} on {new Date(post.createdAt).toLocaleDateString()} at {new Date(post.createdAt).toLocaleTimeString()}</h5>
                    <div className='p-body'>{post.body}</div><br /><br />

                    {
                        post.comments?.length ?
                        <>
                            <div>Comments:</div>
                            <div>{post.comments.map((comment, i) => 
                                <div key={i} className="comm">
                                    <div>{comment.user}</div>
                                    <div>{comment.body}</div>
                                    <button onClick={() => handleDeleteComment(comment)}>X</button>
                                    <Link to={`/posts/${post._id}/comments/${comment._id}`}><span>+</span></Link>
                                </div>
                            )}</div>
                            <br/><br/>
                        </>
                        : ''
                    }
                    <details ref={detailsRef}>
                        <summary style={{ opacity: '.5' }}>Leave a comment:</summary>
                        <form onSubmit={handleSubmitComment}>
                            <textarea ref={bodyRef} id="lc" cols="1" rows="1" />
                            <button>Comment</button>
                        </form>
                    </details>
                    
                    <div className="buttons">
                        <button onClick={handleDeletePost}>Delete</button>
                        <Link to={`/posts/${post._id}/edit`}>
                            <button>Edit</button>
                        </Link>
                        <Link to='..'>
                            <button>Back</button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Show