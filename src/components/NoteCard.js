import React from "react";
import { blue, pink, red, yellow } from "@material-ui/core/colors";
import { DeleteOutline } from "@material-ui/icons";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === "work") {
        return "2px solid red";
      }
    },
  },
  avatar: {
    background: (note) => {
      if (note.category === "work") {
        return yellow[700];
      }
      if (note.category === "money") {
        return red[900];
      }

      if (note.category === "todos") {
        return pink[900];
      }
      return blue[900];
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={4} className={classes.test}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutline style={{ color: red[500] }}/>
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textPrimary">
            {note.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
