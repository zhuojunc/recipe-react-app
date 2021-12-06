import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useLocation, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  let location = useLocation();
  let history = useHistory();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (location.pathname === "/") {
        setValue(0);
    }
    else if (location.pathname === "/Breakfast") {
        setValue(1);
    }
    else if (location.pathname === "/Lunch") {
        setValue(2);
    }
    else if (location.pathname === "/Dinner") {
        setValue(3);
    }
    else if (location.pathname === "/bookmark") {
        setValue(4);
    }
  }, [location.pathname])

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" value={0} onClick={() => {history.push("/")}}/>
        <Tab label="Breakfast" value={1} onClick={() => {history.push("/Breakfast")}}/>
        <Tab label="Lunch" value={2} onClick={() => {history.push("/Lunch")}}/>
        <Tab label="Dinner" value={3} onClick={() => {history.push("/Dinner")}}/>
        <Tab label="Bookmark" value={4} onClick={() => {history.push("/bookmark")}}/>
      </Tabs>
    </Paper>
  );
}
