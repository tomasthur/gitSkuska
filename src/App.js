import "./App.scss";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, yellow, red } from "@mui/material/colors";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const theme = createTheme({
    palette: {
      primary: blue,
      secondary: yellow,
    },
  });

  return (
    <div className="App">
      <h1>Skuska</h1>
      <div className="row">
        <button>Skuska tlacidla</button>
        <button>dalsia skuska</button>
      </div>
      <ThemeProvider theme={theme}>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="secondary">Success</Button>
        <Button variant="outlined" color="secondary">Error</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
