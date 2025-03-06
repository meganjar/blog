// starter data
const posts = [
    {
        subject: 'Once upon a time...',
        body: 'The end.',
        user: 'Bob',
        comments: [],
        createdAt: new Date(),
        _id: 1,
    },
    {
        subject: 'To be or not to be',
        body: 'That is the question.',
        user: 'William',
        comments: [],
        createdAt: new Date(),
        _id: 2
    },
    {
        subject: 'When the world needed him most...',
        body: 'He vanished!',
        user: 'Katara',
        comments: [],
        createdAt: new Date(),
        _id: 3
    }
]

// use local storage for initial state or save starter data to local storage
function initPosts() {
    const postsLS = localStorage.getItem('posts')
    const commentsLS = localStorage.getItem('comments')
    if (!commentsLS) {
        localStorage.setItem('comments', JSON.stringify([]))
    }
    if (!postsLS || JSON.parse(postsLS).length === 0) {
        localStorage.setItem('posts', JSON.stringify(posts))
        return posts
    } else {
        return JSON.parse(postsLS)
    }
}

// below logic handles local storage updates (almost like a mock database)
function initPost(id) {
    let postsLS = localStorage.getItem('posts')
    if (!postsLS) return
    postsLS = JSON.parse(postsLS)
    const post = postsLS.find(p => p._id == id)
    return post 
}

function deletePost(id) {
    let postsLS = JSON.parse(localStorage.getItem('posts'))
    let index = postsLS.findIndex(p => p._id == id)
    postsLS.splice(index, 1)
    localStorage.setItem("posts", JSON.stringify(postsLS))
    return postsLS
}

function updatePost(post) {
    let postsLS = JSON.parse(localStorage.getItem('posts'))
    let index = postsLS.findIndex(p => p._id == post._id)
    postsLS[index] = { ...postsLS[index], ...post }
    localStorage.setItem("posts", JSON.stringify(postsLS))
    return postsLS
}

function createPost(post) {
    let postsLS = JSON.parse(localStorage.getItem('posts'))
    let highestId = postsLS.reduce((a, c) => c._id > a ? c._id : a, 0)
    post = { 
        ...post, 
        user: 'Bob', 
        comments: [], 
        createdAt: new Date(),
        _id: highestId + 1 
    }
    localStorage.setItem("posts", JSON.stringify(postsLS))
    return post
}

export default { 
    initPosts,
    initPost,
    deletePost,
    updatePost,
    createPost,
    posts
}