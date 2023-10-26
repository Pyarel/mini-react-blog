const Create = () => {
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label>Blog Title:</label>
        <input type="text" name="" id="" required />
        <label>Blog Body:</label>
        <textarea name="" id="" cols="30" rows="10" required></textarea>
        <label htmlFor="">Blog Author:</label>
        <select name="" id="">
          <option value="mario"></option>
          <option value="yoshi"></option>
        </select>
        <button>Add blog</button>
      </form>
    </div>
  );
};

export default Create;
