import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined";
import { useForm } from "@inertiajs/react";
import { IconButton, TextField } from "@mui/material";
import { useState } from "react";

export default function StatusPopup() {
    const [open, setOpen] = useState(true);
    const [state , setState] = useState({
        files :[],
    });
   
    const { data, setData, post, processing, errors, setError } = useForm();
   
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
   
    
     const  fileSelectedHandler = (e) => {
        setState({ files: [...state.files, ...e.target.files] })
      }

    return (
        <React.Fragment>
            
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Status Completed
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please Upload Images Here <br/>
                        <TextField
                        type="file" multiple onChange={fileSelectedHandler}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
