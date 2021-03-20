import React from "react";
import { Container, Row, RightLayout, LeftLayout, SocialNav } from "./style";
// import Header from "./Header";
// import { SocialYoutubeCircular } from "@styled-icons/typicons/SocialYoutubeCircular";
import { InstagramWithCircle } from "@styled-icons/entypo-social";
import { SocialGithub } from "@styled-icons/foundation/SocialGithub";
import Navigation from "./Header/Navigation";

const Layout = (props) => {
  return (
    <>
      {/* <Header /> */}
      <Container fluid>
        <Row>
          <LeftLayout className="col profile-image">
            <div>
              <div className="info">
                <img
                  src="/assets/kkm2.png"
                  alt="krishn kumar modanval, kumar, full stack, ui, frontend"
                />
              </div>
              <SocialNav>
                {/* <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialYoutubeCircular size="48" />
                </a> */}
                <a
                  href="https://instagram.com/dev_mind_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramWithCircle size="40" />
                </a>
                <a href="https://github.com/krishna072" rel="noopener noreferrer">
                  <SocialGithub size="48" />
                </a>
              </SocialNav>
              <Navigation />
            </div>
          </LeftLayout>
          <RightLayout className="col profile-info" bg="#64b5b7" color="#fff">
            {props.children}
          </RightLayout>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
