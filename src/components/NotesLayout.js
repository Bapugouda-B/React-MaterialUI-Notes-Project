import React from "react";
import {
  makeStyles,
  Drawer,
  Typography,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useLocation, useNavigate } from "react-router";
import {format} from "date-fns"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
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
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date:{
      flexGrow: 1,
    }
  };
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
      {/* App Bar */}
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>Today is the {format(new Date(), 'do MMMM Y')}</Typography>
          <Typography>Bapu</Typography>
        </Toolbar>
      </AppBar>
      {/* drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          Paper: classes.drawerPaper,
        }}
      >
        <div>
          <Typography variant="h4" className={classes.title}>
            Bapu's Note
          </Typography>
        </div>
        <List>
          {drawerItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
          {children}
          </div>
    </div>
  );
};

export default NotesLayout;
