import React from "react";
import "./blog.css";
import Article from "../../components/article/Article";
import { ai, restaurant, netflix, hoobank } from "../../assets/index";

const Blog = () => {
  return (
    <div id="projects" className="gpt3__blog">
      <div className="projects__header-container">
        <h1 className="projects__header">Projects</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={restaurant}
            text="Fully responsive restaurant website Made with React.js."
            link="https://orvela-restourant.onrender.com"
          />
          <Article
            imgUrl={hoobank}
            text="Modern Bank website made with React.js."
            link="https://orvela-hoobank.onrender.com"
          />
          <Article
            imgUrl={ai}
            text="Ai company website made with React.js, fully responsive."
            link="https://orvela-ai.onrender.com"
          />

          <Article
            imgUrl={netflix}
            text="Copy of a Netflix Georgia, Made with html, css and javascript."
            link="https://orvela-netflix.onrender.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
