import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import classNames from "classnames";

import { useStyles } from "./style";
import Header from "../header";

export const Layout: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classNames(classes.root)}>
      <Header />
      <Box className={classes.body}>
        <Outlet />
      </Box>
    </Box>
  );
};
