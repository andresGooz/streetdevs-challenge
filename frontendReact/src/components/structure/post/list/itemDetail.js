import React from 'react';
import { Link } from 'react-router-dom';


function ItemDetail({ post }) {
  return (
    <>
      <li key={post.id} className="mdc-list-item" tabIndex="0">
        <Link to={`/post/${post.id}`}>
          <span className="mdc-list-item__text">{post.id}</span><br />
          <span className="mdc-list-item__text">{post.name}</span><br />
          <span className="mdc-list-item__text">{post.description}</span>
        </Link>
      </li>
      <Link to={`/post/edit/${post.id}`}>
              <md-filled-button>
                <md-icon class="material-icons">edit</md-icon>
                Edit Post
              </md-filled-button>
      </Link>
    </>
  );
}

export default ItemDetail;
