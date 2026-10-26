import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import CreateBlog from "../pages/CreateBlog";
import BlogDetails from "../pages/BlogDetails";
import UpdateBlog from "../pages/UpdateBlog";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-blogs" element={<Blogs />} />
      <Route path="/create-blog" element={<CreateBlog />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/blogs/:id/edit" element={<UpdateBlog />} />
    </Routes>
  );
}
