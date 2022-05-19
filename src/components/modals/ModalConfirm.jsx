/* eslint-disable prettier/prettier */

import { Button, Dialog, Box, DialogContent, DialogActions, IconButton, Typography, Stack } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { styled } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';
import DialogContentText from '@mui/material/DialogContentText';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1)
    }
}));

function ModalConfirm({ open, onClose, title = 'Modal', minWidth = 'sm', data, onConfirm }) {
    return (
        <BootstrapDialog
            // eslint-disable-next-line react/jsx-boolean-value
            fullWidth={true}
            maxWidth={minWidth}
            onClose={onClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <Box
                sx={{
                    width: '80%',
                    height: '350px',
                    padding: '20px',
                    margin: '0 auto',
                    textAlign: 'center'
                    // display: 'flex',
                    // justifyContent: 'center'
                }}
            >
                <CancelOutlinedIcon sx={{ color: '#F44336', width: '150px', height: '150px', margin: '0 auto' }} />
                <Typography variant="h4" gutterBottom component="div" sx={{ fontSize: '2rem' }}>
                    Are you sure?
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}>
                    Do you really want to delete this record? This process cannot be undone.
                </Typography>

                <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginTop: '20px' }}>
                    <Button variant="contained" sx={{ background: '#9E9E9E', '&:hover': { background: '#9E9E9E' } }} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ background: '#F44336', '&:hover': { background: '#F44336' } }}
                        onClick={() => onConfirm(data)}
                    >
                        Delete
                    </Button>
                </Stack>
            </Box>
        </BootstrapDialog>
    );
}
export default ModalConfirm;
