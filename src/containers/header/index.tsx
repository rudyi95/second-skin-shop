import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";

import { HeaderLogo, HomeBaner } from "src/assets";

import { useStyles } from "./style";
import { CustomButton } from "src/components/customButton";
import CustomIcon from "src/components/customIcon";
import { IconType } from "src/types/enums";

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={HomeBaner} alt="HomeBaner" />
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ position: "absolute", top: 0 }}
      >
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <Box sx={{ display: "flex", columnGap: "66px" }}>
              <img src={HeaderLogo} alt="headerLogo" />
              <Box sx={{ display: "flex", columnGap: "30px" }}>
                <CustomButton text="About Us" variant="text" className={classes.button} />
                <CustomButton text="Shop" variant="text" className={classes.button} />
                <CustomButton
                  text="Stylist consultation"
                  variant="text"
                  className={classes.button}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", columnGap: "30px" }}>
              <CustomIcon type={IconType.search} />
              <CustomIcon type={IconType.basket} />
              <CustomIcon type={IconType.user} />
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
