import React from "react";
import "./article.css";

const Article = ({ imgUrl, text, link }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <h3>
            <a href={link} target="blank">
              {text}
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Article;
