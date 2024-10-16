import React from 'react';
import { Link } from 'react-router-dom';


function EditPostForm({ post }) {
  return (
    <>
        <li key={post.id} className="mdc-list-item" tabIndex="0">
        <Link to={`/post/${post.id}`}>
            <span className="mdc-list-item__text">{post.id}</span><br />
            <span className="mdc-list-item__text">{post.name}</span><br />
            <span className="mdc-list-item__text">{post.description}</span>
        </Link>
        </li>
        <md-filled-button type="submit">
            <md-icon class="material-icons">save</md-icon>
            Save Post
        </md-filled-button>
    </>
  );
}

export default EditPostForm;
