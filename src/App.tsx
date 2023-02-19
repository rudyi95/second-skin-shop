import React from "react";
import { BrowserRouter } from "react-router-dom";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";

import Routers from "./routes";

import { theme } from "src/utils/constants/ui";

import "./App.css";

const App: React.FC = () => {
  const muiCache = createCache({
    key: "mui",
    prepend: true,
  });

  return (
    <BrowserRouter>
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={theme}>
          <Routers />
        </ThemeProvider>
      </CacheProvider>
    </BrowserRouter>
  );
};

export default App;
