import "./BlogDetail.css";
import "../Blog/Blog.css";
import { blogData } from "../../components/helpher/imgData";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  let { id } = useParams();
  const post = blogData.filter((item) => item.id === Number(id));

  const convertNewlinesToHTML = (str) => {
    return str.replace(/\n/g, "<br />");
  };

  return (
    <>
      <div className="blog-detail container-layout">
        <h1 className="h1-green-left">Post</h1>

        <div className="blog-detail-post-container">
          <h1 className="blog-detail-post-title">{post[0].title}</h1>

          <div className="blog-detail-post-tag-date-container">
            <div className="blog-detail-tag-container">
              <p>Tag: </p>
              <button className="blog-post-tag">{post[0].tag}</button>
            </div>
            <p>{post[0].date}</p>
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: convertNewlinesToHTML(post[0].content),
            }}
            className="blog-detail-post-content"
          />
        </div>
      </div>
    </>
  );
}
