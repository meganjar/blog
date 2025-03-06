import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../data";

function New() {

    let subjectRef = useRef()
    let bodyRef = useRef()
    let navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
    
        let post = {
            subject: subjectRef.current.value,
            body: bodyRef.current.value,
            user: "Bob"
        }
        
       async function createPost() {
        const response = await fetch('http://localhost:8080/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
           
       }
       createPost()
        navigate('/posts')
    }

    return ( 
        <div>
            <h1>New Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nme">Subject:</label><br />
                <input type="text" id="nme" ref={subjectRef} /><br /><br />

                <label htmlFor="clr">Body:</label><br />
                <textarea id="clr" cols="30" rows="10" ref={bodyRef} /><br /><br />

                <button>Submit</button>
            </form>
        </div>
     );
}

export default New;