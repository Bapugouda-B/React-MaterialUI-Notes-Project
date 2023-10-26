import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { FormControlLabel, makeStyles } from "@material-ui/core";

// very useful for adding custom styles
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const CreateNotes = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDescriptionError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (description === "") {
      setDescriptionError(true);
    }
    if (title && description) {
      // Post request once the form is submitted
      fetch(" http://localhost:8000/notes", {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify({title, description, category})
      }).then(navigate('/'))
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Title"
          color="secondary"
          variant="filled"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDescription(e.target.value)}
          className={classes.field}
          label="Description"
          color="secondary"
          variant="filled"
          multiline
          rows={5}
          fullWidth
          required
          error={descriptionError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CreateNotes;
