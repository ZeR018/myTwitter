import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {Button, DialogContent} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

interface ModalBlockProps {
    title: string;
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const ModalBlock: React.FC<ModalBlockProps> = ({title, open, onClose, children}): React.ReactElement => {



    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ModalBlock;
