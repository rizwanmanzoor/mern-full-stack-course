import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPostById } from "../services/post.service";

export default function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the blog details based on the id
    async function fetchBlog() {
      try {
        const data = await getPostById(id);
        setBlog(data);
      } catch (error) {
        console.error("Failed to fetch blog details:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [id]);

  if (loading) {
    return <p>Loading blog...</p>;
  }

  return (
    <section className="mt-6 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 md:text-4xl">
            Blog Details
          </h2>
        </div>

        {/* Blog List Grid */}
        <div className="grid divide-y divide-slate-300">
          <div className="py-4">
            <h3 className="text-2xl text-center font-bold text-slate-900 mb-2">
              {blog ? blog.title : "Loading..."}
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              {blog ? blog.body : "Loading..."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
