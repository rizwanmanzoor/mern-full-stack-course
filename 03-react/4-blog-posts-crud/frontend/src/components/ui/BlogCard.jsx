import { Link } from "react-router-dom";

export default function BlogCard({ post, onDelete }) {
  return (
    <>
      <article className="bg-gray-100 border border-slate-200 rounded-lg overflow-hidden">
        <div className="p-6 block">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            {post.title}
          </h3>
          <p className="text-slate-600 text-base leading-relaxed line-clamp-3">
            {post.body}
          </p>

          <div className="mt-6 flex justify-between items-center gap-4 flex-wrap">
            <div className="inline-flex justify-between items-center gap-4">
              <Link
              to={`/blogs/${post._id}/edit`}
              className="inline-block text-blue-700 text-sm font-medium rounded underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Edit
            </Link>

            <button
              type="button"
              className="cursor-pointer text-red-600 text-sm font-medium"
              onClick={() => onDelete(post._id)}
            >
              Delete
            </button>
            </div>

            <Link
              to={`/blogs/${post._id}`}
              className="inline-block py-1.5 px-3 text-sm rounded-md font-semibold text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Read more
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
