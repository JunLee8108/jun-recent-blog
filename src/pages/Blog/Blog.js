import "./Blog.css";
import { blogData } from "../../components/helpher/imgData";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Blog() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handlePost = (id) => () => {
    navigate(`/blog/${id}`);
  };

  const searchedData = searchInput
    ? blogData.filter(
        (item) =>
          item.title
            .replaceAll(" ", "")
            .toLocaleLowerCase()
            .includes(searchInput.replaceAll(" ", "").toLocaleLowerCase()) ||
          item.content
            .replaceAll(" ", "")
            .toLocaleLowerCase()
            .includes(searchInput.replaceAll(" ", "").toLocaleLowerCase())
      )
    : null;

  return (
    <>
      <div className="blog container-layout">
        <h1 className="h1-green-left blog-h1-green-left">Blog</h1>

        <div className="blog-search-container">
          <input
            id="blog-search-id"
            type="search"
            placeholder="🔍 Search Post..."
            className="blog-search"
            onChange={handleSearch}
          ></input>
          <label htmlFor="blog-search-id">Search</label>

          {searchInput ? (
            <div className="blog-search-result">
              {searchedData.length > 0 ? (
                <>
                  <h2 className="blog-search-result-title">Search Result</h2>
                  {searchedData.map((item, index) => {
                    return (
                      <div className="blog-post" key={index}>
                        <div className="blog-post-title-date-container">
                          <h1 className="blog-post-title">{item.title}</h1>
                          <p className="blog-post-date">{item.date}</p>
                        </div>
                        <p className="blog-post-content">{item.content}</p>
                        <button className="blog-post-tag">{item.tag}</button>
                      </div>
                    );
                  })}
                </>
              ) : (
                <h2 className="blog-search-no-result">No Result.</h2>
              )}
            </div>
          ) : null}
        </div>

        <div className="blog-post-container">
          {blogData.map((item, index) => {
            return (
              <div
                className="blog-post"
                key={index}
                onClick={handlePost(item.id)}
              >
                <div className="blog-post-title-date-container">
                  <h1 className="blog-post-title">{item.title}</h1>
                  <p className="blog-post-date">{item.date}</p>
                </div>
                <p className="blog-post-content">{item.content}</p>
                <button className="blog-post-tag">{item.tag}</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
