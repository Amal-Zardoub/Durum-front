import styled from "styled-components";

const Box = styled.div`
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0% 5% 0% 5%;
`;

const Section = styled.div`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  padding-bottom: ${(props) => props.size};
  line-height: ${(props) => props.lineheight};
`;

export { Box, Section };
