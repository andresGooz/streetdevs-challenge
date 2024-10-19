import React, { useState, useEffect } from 'react';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import 'material-icons/iconfont/material-icons.css';
import { updatePost } from '../../../behavior/post/editPostSlicer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function EditPostForm({ post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState(post.name);
  const [description, setDescription] = useState(post.description);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPostData = { name, description };
    const resultAction = await dispatch(updatePost({ id: post.id, postData: updatedPostData }));
    if (updatePost.fulfilled.match(resultAction)) {
      navigate(`/post/${post.id}`);
    }
  };
  useEffect(() => {
    if (post) {
      setName(post.name);
      setDescription(post.description);
    }
  }, [post]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          value={name}
          onInput={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          id="description"
          type="text"
          placeholder="Descripción"
          value={description}
          onInput={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <md-filled-button type="submit">
        <md-icon class="material-icons">save</md-icon>
        Save Post
      </md-filled-button>
    </form>
  );
}

export default EditPostForm;
