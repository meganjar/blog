import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import data from "../../data"

function Index() {

    // replace initializer function in useState with an array: []
    // and fetch all posts (GET request) inside a useEffect instead 
    const [posts, setPosts] = useState([])

    async function fetchPosts() {
        const res = await fetch('http://localhost:8080/posts')
        const data = await res.json()
        setPosts(data)
      }
      useEffect(() => {
        fetchPosts()
      }, [])


    return (
            <div>
                <h1>Index View</h1>
                <div id="posts">

                        {posts.map((post, index) => 
                            <Link to={`/posts/${post._id}`} key={index}>
                                <div className="a-post">
                                    {post.subject}
                                </div>
                            </Link>
                        )}
            
                    <Link to="/posts/new">
                        <button>NEW POST</button>
                    </Link>
    
                </div>
            </div>
    )
}

export default Index