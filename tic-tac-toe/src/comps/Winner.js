import React, { useEffect } from  "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog(props) {
  const [name, setName] = React.useState("");

  const handleClose = () => {
    props.setGameWon(false);
  };

  useEffect(()=>{
    if(props.winner){
      props.setGameWon(true);
    }
  },[props.winner])


  return (
    <div>
      {props.winner && ( 
      <Dialog
        open={props.gameWon}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Register as Winner</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Insert you Name to be Register to the Game Board
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Winner Name"
            type="string"
            fullWidth
            onChange={(e) => {
              let query = e.target.value;
              setName(query);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={props.handleRegister(name)} color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
      )}
    </div>
  );
}
