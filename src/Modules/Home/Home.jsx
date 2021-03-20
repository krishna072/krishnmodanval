import React from "react";
import { H1 } from "./style";
import Layout from "../../Layout";

const Profile = () => {
  // useEffect(() => {
  //   const title = document.querySelector("h1").innerText;
  //   const xx = title.split("");

  //   xx.map((string, index) => {
  //     console.log("iteam", string);
  //     return <>{string}</>;
  //   });
  // });

  return (
    <>
      <Layout>
        <div>
          <h1 className="page-title">Hello, There</h1>
          <H1>I'm Krishn Kumar Modanval</H1>
          <h2>I am a Full-stack developer</h2>
          <div className="download-cv">
            <a href="/#" className="button">
              Download cv
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Profile;
