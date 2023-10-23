import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./components/Notes.js";
import CreateNotes from "./components/CreateNotes.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create" element={<CreateNotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
