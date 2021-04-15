import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Stateful from "./Stateful";
import AddMovie from "./movies/AddMovie";

function App() {
  return (
    <div className="vw-100 vh-100 container-fluid mt-5">
      {/* <Stateful language="pt-BR" /> */}
      <AddMovie />
    </div>
  );
}

export default App;
