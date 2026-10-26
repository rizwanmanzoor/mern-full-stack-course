import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CircleCheck, CircleX } from "lucide-react";

import { createPost } from "../services/post.service";

export default function CreateBlog() {
  const navigate = useNavigate();

  const [status, setStatus] = useState({ type: "", message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const handleCreateBlog = async ({ title, content }) => {
    try {
      const data = await createPost({ title, content });

      reset();
      navigate(`/blogs/${data._id}`);

      setStatus({ type: "success", message: "Blog created successfully." });
    } catch (error) {
      console.error("Error creating blog:", error);
      
      setStatus({ type: "error", message: "Failed to create blog." });
    }
  };

  return (
    <section className="mt-6 px-4 md:px-8">
      <div className="max-w-md mx-auto">
        {/* Header Section */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 md:text-4xl">
            Create Blog Post
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Fill out the form below to create a new blog post.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit(handleCreateBlog)}
          className="px-4 mt-6"
          noValidate
        >
          {status.message && (
            <div
              className={` bg-green-50 text-sm p-4 mb-6 rounded-md border border-green-100 w-max min-w-xs max-w-sm ${status.type === "error" ? "bg-red-50 border-red-100" : "bg-green-50 border-green-100"} `}
              role="alert"
            >
              <div
                className={` flex items-center gap-2.5 font-medium ${status.type === "error" ? "text-red-500" : "text-green-900"} `}
              >
                {status.type === "error" ? <CircleX /> : <CircleCheck />}
                <p>{status.message}</p>
              </div>
            </div>
          )}

          <div className="space-y-6 max-w-md mx-auto">
            <div>
              <label
                htmlFor="title"
                className="text-slate-900 font-medium text-[13px] inline-block mb-1"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="My First Blog Post"
                className="px-1 py-2.5 text-sm text-slate-900 bg-white w-full border-b-2 border-slate-300 focus:border-blue-600 outline-none"
                {...register("title", {
                  required: "Title is required",
                  minLength: {
                    value: 3,
                    message: "Title must be at least 3 characters",
                  },
                  maxLength: {
                    value: 120,
                    message: "Title cannot exceed 120 characters",
                  },
                  validate: (value) =>
                    value.trim().length >= 3 ||
                    "Title must contain at least 3 non-space characters",
                })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title?.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="content"
                className="text-slate-900 font-medium text-[13px] inline-block mb-1"
              >
                Content
              </label>
              <textarea
                placeholder="Write your blog content here..."
                className="px-1 py-2.5 text-sm text-slate-900 bg-white w-full border-b-2 border-slate-300 focus:border-blue-600 outline-none"
                rows="6"
                {...register("content", {
                  required: "Content is required",
                  minLength: {
                    value: 5,
                    message: "Content must be at least 5 characters",
                  },
                  maxLength: {
                    value: 5000,
                    message: "Content cannot exceed 5000 characters",
                  },
                  validate: (value) =>
                    value.trim().length >= 5 ||
                    "Content must contain at least 5 non-space characters",
                })}
              ></textarea>
              {errors.content && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.content?.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2! py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {isSubmitting ? "Submitting..." : "Create Blog"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
