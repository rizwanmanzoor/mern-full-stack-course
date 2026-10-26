import { useEffect, useState } from "react";

import BlogCard from "../ui/BlogCard";
import { deletePost, getPosts } from "../../services/post.service";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const posts = await getPosts();
        setBlogs(posts);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

   // Handle blog deletion
    const handleDelete = async (id) => {
       const confirmed = window.confirm(
        "Are you sure you want to delete this blog?"
      );
  
      if(!confirmed) return;
  
      try {
        await deletePost(id);
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      } catch (error) {
        console.error("Failed to delete blog:", error);
        alert("Failed to delete blog. Please try again.");
        return;
      }
    }

  return (
    <section className="my-6 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 md:text-4xl">
            Latest Blog Posts
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Get inspired with our latest articles on creativity, productivity,
            and future trends. Stay ahead with expert insights, practical tips,
            and thought-provoking ideas.
          </p>
        </div>

        {/* Blog List Grid */}
        <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-3">
          {blogs.map((post) => (
            <BlogCard key={post._id} post={post} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </section>
  );
}
