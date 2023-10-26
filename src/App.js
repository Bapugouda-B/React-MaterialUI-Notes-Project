import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./components/Notes.js";
import CreateNotes from "./components/CreateNotes.js";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";


//creating theme (it will help to override the default theme properties)
const theme = createTheme({
palette:{
  primary:{
    main: "#fefefe"
  },
  secondary: purple
}
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create" element={<CreateNotes />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
