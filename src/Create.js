import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Blog added!");
      setIsPending(false);
      //   history.go(-1); Go back
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          name=""
          id=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog Body:</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog Author:</label>
        <select
          name=""
          id=""
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button>Adding blog</button>}
      </form>
    </div>
  );
};

export default Create;
