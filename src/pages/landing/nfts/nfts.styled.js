import styled from "styled-components";

export const NFTsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  margin-top: -10%;
  opacity: 1;
  background: #000;
  -webkit-clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
  @media (min-width: 43.8125rem) {
    -webkit-clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
    margin-top: -20%;
  }
`;

export const NFTsContent = styled.div`
  display: flex;
  justify-content: center;
  position: ${(props) => (props.scrollState ? "fixed" : "absolute")};
  top: 15px;
  left: 0;
  width: 100%;
  height: 100%;
  img {
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
    @media (min-width: 43.8125rem) {
      max-height: 100vh;
      width: 75vw;
    }
  }

  @media (max-width: 425px) {
    top: -15px;
    overflow: visible;
  }
  @media (min-width: 43.8125rem) {
    top: -5px;
    overflow: visible;
  }
`;
