import React from "react";

import { Button, ButtonProps, Typography } from "@mui/material";
import classnames from "classnames";

import { CustomTooltip } from "src/components/tooltip";

import { useStyles } from "./style";

interface IProps {
  text?: string;
  className?: string;
  tooltipText?: string;
  customColor?: string;
}

export const CustomButton: React.FC<IProps & ButtonProps> = ({
  text,
  variant = "outlined",
  className,
  tooltipText,
  customColor,
  ...props
}) => {
  const classes = useStyles();

  return (
    <CustomTooltip title={tooltipText} placement="top">
      <Button className={classnames(classes.root, className)} variant={variant} {...props}>
        <Typography color="inherit">{text}</Typography>
      </Button>
    </CustomTooltip>
  );
};
