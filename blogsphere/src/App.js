import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route, Routes,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import Post from './pages/post'
import Header from "./pages/Header";
import Login from "./pages/login";
import Register from "./pages/register";
import {UserContextProvider} from "./UserContext.js"
import CreatePost from "./pages/Createpost";
import IndexPage from "./pages/IndexPage";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Post />
              <Post />
            </main>
          } />
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreatePost/>} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>

  );
}

export default App;
