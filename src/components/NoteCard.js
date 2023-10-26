import React from "react";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <Card elevation={4}>
        <CardHeader
          action={
            <IconButton onClick={()=>handleDelete(note.id)}>
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
