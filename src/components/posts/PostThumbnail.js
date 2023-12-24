import { Link } from "react-router-dom";

export function PostThumbnail({ singlePost }) {
  return (
    <Link to={`/Post/${singlePost.id}`}>
      <div className="thumbnail">
        <h3 className="thumbnail-header">{singlePost.title}</h3>
        <p className="thumbnail-decription">{singlePost.description}</p>
      </div>
    </Link>
  );
}
