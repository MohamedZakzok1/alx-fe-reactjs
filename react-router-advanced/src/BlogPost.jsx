import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  return <div>Viewing Blog Post {id}</div>;
}

export default BlogPost;
