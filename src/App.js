import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes.js";
import CreateNotes from "./pages/CreateNotes.js";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import NotesLayout from "./components/NotesLayout.js";

//creating theme (it will help to override the default theme properties)
const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
});

function App() {
  return (
          <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NotesLayout>
            <Routes>
              <Route path="/" element={<Notes />} />
              <Route path="/create" element={<CreateNotes />} />
            </Routes>
        </NotesLayout>
      </ThemeProvider>
          </BrowserRouter>
  );
}

export default App;
