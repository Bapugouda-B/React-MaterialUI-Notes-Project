import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";

const useStyles = makeStyles({
    test:{
        border: (note) =>{
            if(note.category === "work"){
                return "1.5px solid red"
            }
        } 
    }
})

const NoteCard = ({ note, handleDelete }) => {
    const classes = useStyles(note)
  return (
    <div>
      <Card elevation={4} className={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutline />
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
