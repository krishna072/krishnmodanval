import React from "react";
import Layout from "../../Layout";

const Blogs = () => {
  return (
    <Layout>
      <div>
        <h1 className="page-title">My Blogs</h1>
        <p style={{ fontSize: 25 }}>
        Maybe just like you, at first we didn’t have a clue about how to build a website, 
        let alone write half a line of code – even if our lives depended on it! We wanted 
        to build a website for our business, but felt overwhelmed, confused & scared about 
        how to actually do it or which builder to use. We couldn’t afford to make wrong 
        decisions or expensive mistakes, so after years of trials & errors using different 
        website builders, we’re here to share our experiences with you. Here you can find my blogs on <a style={{ color: "black" }} rel="noopener noreferrer" target="_blank" href="https://devmind.ml">devmind.ml </a>
        </p>
      </div>
    </Layout>
  );
};

export default Blogs;
