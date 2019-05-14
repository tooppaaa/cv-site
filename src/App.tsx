import React, { Suspense } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Home from "./pages/Home";
import theme from "./helpers/theme";

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <MuiThemeProvider theme={theme}>
        <Home />
      </MuiThemeProvider>
    </Suspense>
  );
};

export default App;
