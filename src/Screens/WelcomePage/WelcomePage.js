import React from "react";
import { Container, StyledButtons } from "./style";
import bg1 from "../../assets/images/blog-1.jpg";
import bg2 from "../../assets/images/blog-2.jpg";
import { ContainedButton } from "../../components/button";
import { useTheme } from "styled-components";

function WelcomePage() {
  const theme = useTheme();
  const green = theme.COLORS.green;
  const orange = theme.COLORS.orange;
  return (
    <Container urlImg={bg2}>
      <StyledButtons>
        <ContainedButton text="Stock" color={green} width="100px" />{" "}
        <ContainedButton text="Employés" color={orange} width="100px" />
      </StyledButtons>
    </Container>
  );
}

export default WelcomePage;
