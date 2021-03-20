import React from "react";
import Layout from "../../Layout";
import { Ul } from "./style";
import {
  LogoJavascript,
  LogoReact,
  LogoHtml5,
} from "@styled-icons/ionicons-solid";
import {
  Apollographql,
  Mongodb,
  NodeDotJs,
  StyledComponents,
  Graphql,
  Firebase,
  Linux,
  Python,
  Redhat,
  Git,
  Css3,
} from "@styled-icons/simple-icons";
import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";

const Skills = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className="page-title">My skills</h1>
        <Ul>
        <li>
            <LogoHtml5 size="40" />
          </li>
          <li>
            <Css3 size="40" />
          </li>
          <li>
            <Bootstrap size="40" />
          </li>
          <li>
            <StyledComponents size="40" />
          </li>
          <li>
            <LogoJavascript size="40" />
          </li>
          <li>
            <LogoReact size="40" />
          </li>
          <li>
            <Apollographql size="40" />
          </li>
          <li>
            <Graphql size="40" />
          </li>
          <li>
            <NodeDotJs size="40" />
          </li>
          <li>
            <Python size="40" />
          </li>
          <li>
            <Git size="40" />
          </li>
          <li>
            <Redhat size="40" />
          </li>
          <li>
            <Linux size="40" />
          </li>
          <li>
            <Firebase size="40" />
          </li>
          <li>
            <Mongodb size="40" />
          </li>
        </Ul>
      </div>
    </Layout>
  );
};

export default Skills;
