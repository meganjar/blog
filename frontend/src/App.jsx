import { Routes, Route, Navigate} from 'react-router-dom';
import './index.css';

import EditPost from './pages/posts/Edit';
import IndexPost from './pages/posts/Index';
import NewPost from './pages/posts/New';
import ShowPost from './pages/posts/Show';
import EditComment from './pages/comments/Edit';
import { useEffect } from 'react';

 function App() {

  
  
 
  return (
    <div className="App">
      <h1>Blog</h1>
      <Routes>
        <Route path='/' element={<Navigate to='/posts' />} />
        <Route path='/posts' element={<IndexPost />} />
        <Route path='/posts/new' element={<NewPost />} />
        <Route path='/posts/:id/edit' element={<EditPost />} />
        <Route path='/posts/:id' element={<ShowPost />} />
        <Route path='/posts/:id/comments/:cid' element={<EditComment />} />
      </Routes>
    </div>
  );
}

// root route
// app.get('/posts', (req, res) => res.render('views/Index'))

export default App;
