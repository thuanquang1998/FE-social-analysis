import PropTypes from 'prop-types';

import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1)
    }
}));
const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            <Typography sx={{ m: 0, p: 0, fontSize: '1.5rem' }} variant="h3" gutterBottom component="div">
                {children}
            </Typography>

            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500]
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

function ModalCreate({ children, open, onClose, title = 'Modal', minWidth = 'md' }) {
    return (
        <BootstrapDialog
            // eslint-disable-next-line react/jsx-boolean-value
            fullWidth={true}
            maxWidth={minWidth}
            onClose={onClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
                {title}
            </BootstrapDialogTitle>
            <DialogContent dividers>{children}</DialogContent>
            <DialogActions>
                <Button onClick={() => {}}>Submit</Button>
            </DialogActions>
        </BootstrapDialog>
    );
}

ModalCreate.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    minWidth: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool
};

export default ModalCreate;
