import AddCircleIcon from '@material-ui/icons/AddCircle';
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function ADDButton(props) {
    const classes = useStyles();
    const category = props.category;

    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddCircleIcon />}
          href={"/new/" + category}
        >
          Add a Recipe
        </Button>
      </div>
    );
  }  