import styled from "styled-components";

export const Container = styled.div`
  background-image: url(${(props) => props.urlImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const StyledButtons = styled.div`
  position: absolute;
  margin: 0;
  top: 50%;
  left: 45%;
  transform:(-50%,-50%)
`;
