import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const id = props.id;
  const title = props.title;
  let history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deletePost = () => {
    setOpen(false);
    fetch(`https://zhuojunc-recipe-api.herokuapp.com/api/recipes/${id}`, {
        method: "DELETE"
      }).then((json) => {
        toast.success(`Recipe for "${title}" was deleted`);
        history.push("/");
      });
  };

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure to delete this recipe?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once confirmed, this recipe will be deleted permanently and may not be recovered. If you do not wish to do so, please hit cancel below.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deletePost} color="primary">
            Confirm
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
