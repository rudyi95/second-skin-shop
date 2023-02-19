import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
  },
  body: {
    flex: "1 0 auto",
    background: "#F5F5F6",
  },
}));
