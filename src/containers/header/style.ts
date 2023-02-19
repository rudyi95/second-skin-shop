import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
  },
  button: {
    padding: "0 !important",
    height: "fit-content",
    textTransform: "uppercase",
    color: '#000000'
  },
}));
