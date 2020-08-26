import React from "react";
import UploadCard from "./components/UploadCard";
import SelectionCard from "./components/SelectionCard";
import "./App.css";

function App() {
  return (
    <div className="project">
      <UploadCard />
      <SelectionCard />
    </div>
  );
}

export default App;
