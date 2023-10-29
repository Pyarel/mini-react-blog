import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [image, setImage] = useState(null);

  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const uploadPicture = (e) => {
    const file = e.target.files && e.target.files[0];

    //Create a file reader object
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Stop the default submit action
    setIsPending(true); //Set the isPending state to true

    const now = new Date();
    const locale = navigator.language;
    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    let blog;
    blog = {
      title,
      body,
      author,
      image,
      date: new Intl.DateTimeFormat("locale", options).format(now),
    };
    if (image) blog.image = image;

    //POST request to JSON server
    try {
      axios.post("http://localhost:8000/blogs", blog);
      setIsPending(false);
      //   history.go(-1); Go back to previous page
      history.push("/"); //Go back to root or home page
    } catch (err) {
      console.log(err); //Set the isPending state to false
      setIsPending(false);
    }
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
          <option value="paroo">Paroo</option>
        </select>
        <label>Upload Image:</label>
        <input type="file" name="" onChange={uploadPicture} />
        {image && <img src={image} alt="Preview" />}
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog</button>}
      </form>
    </div>
  );
};

export default Create;
