import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {/* Iterate through each blog */}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written By: {blog.author}</p>
            <p className="blog-body">{blog.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
