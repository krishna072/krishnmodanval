import styled from "styled-components";
import { mobileView, desktopView } from "../../style/breakpoints";

export const Ul = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    width: calc(100% / 3);
    padding: 10px;
    @media ${mobileView} {
      width: calc(100% / 4);
    }
    @media ${desktopView} {
      margin-bottom: 30px;
      svg {
        width: 90px;
        height: 90px;
        color: #fff;
      }
    }
  }
`;
