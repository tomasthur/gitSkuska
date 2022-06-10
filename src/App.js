import "./App.scss";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div className="App">
      <h1>Skuska</h1>
      <div className="row">
        <button>Skuska tlacidla</button>
        <button>dalsia skuska</button>
      </div>
      <Button
        style={{
          backgroundColor: "#ffea00",
          fontSize: "12px",
          margin: "4px",
          alignItems: "center",
        }}
      >
        Secondary
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </div>
  );
}

export default App;
