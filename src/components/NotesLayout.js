import React from "react";
import {
  makeStyles,
  Drawer,
  Typography,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useLocation, useNavigate } from "react-router";

const drawerWidth = 240;

const useStyles = makeStyles((theme)=>{
    return {
        page: {
            backgroundColor: "#f9f9f9",
            width: "100%",
            padding: theme.spacing(3)
          },
          drawer: {
            width: drawerWidth,
          },
          drawerPaper: {
            width: drawerWidth,
          },
          root: {
            display: "flex",
          },
          active: {
            background: "#f4f4f4",
          },
          title:{
            padding: theme.spacing(2)
          }
        }
    });
  

const NotesLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();

  const drawerItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create New Notes",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          Paper: classes.drawerPaper,
        }}
      >
        <div>
          <Typography variant="h4" className={classes.title}>Bapu's Note</Typography>
        </div>
        <List>
          {drawerItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default NotesLayout;
