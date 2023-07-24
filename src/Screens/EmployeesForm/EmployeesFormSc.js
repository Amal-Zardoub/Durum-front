import React from "react";
import { EmployeeForm } from "../../sections";
import { Box, Section } from "./style";
import { useTheme } from "styled-components";
function EmployeesFormScreen() {
  const theme = useTheme();
  const green = theme.COLORS.green;
  const orange = theme.COLORS.orange;
  const lightest = theme.COLORS.lightest;
  const grey = theme.COLORS.grey;
  const font = theme.FONTS.join(", ");
  const extraLarge = theme.FontSize.extraLarge;
  const medium = theme.FontSize.medium;
  const heigmedium = theme.lineheight.heigmedium;

  return (
    <Box color={lightest}>
      <div>
        <Section
          font={font}
          size={extraLarge}
          color={green}
          lineheight={extraLarge}
        >
          Bienvenue dans notre équipe!{" "}
        </Section>
        <Section font={font} size={medium} color={grey} lineheight={heigmedium}>
          Votre créativité et votre engagement sont les clés de notre succèes et
          notre avancement. <br /> Ensemble, nous allons continuer à grandir et
          à atteindre de nouveaux sommets. <br />
          Encore une fois,{" "}
          <span style={{ color: orange, fontWeight: 600 }}>
            bienvenue à bord !
          </span>
        </Section>
      </div>
      <EmployeeForm />
    </Box>
  );
}

export default EmployeesFormScreen;
