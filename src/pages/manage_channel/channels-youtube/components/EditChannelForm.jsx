/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react';
// material
// eslint-disable-next-line import/no-duplicates
import { Link, Stack, Grid, TextField, IconButton, InputAdornment, Box, Avatar, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// eslint-disable-next-line import/no-duplicates
import { CircularProgress } from '@mui/material';
// component
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { styled } from '@mui/material/styles';

import { toast } from 'react-toastify';

const InputImage = styled('input')({});
// ----------------------------------------------------------------------

export default function EditChannelForm({ channelData, onSuccess }) {
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    //   ---------------------- setup hook form ----------------------
    const validationSchema = Yup.object().shape({
        channel_name: Yup.string().required("Channel's name is required"),
        email: Yup.string().required('Email is required')
    });
    const defaultValues = {
        avatar: null,
        channel_name: '',
        email: '',
        ...channelData
    };
    const formOptions = {
        defaultValues: { ...defaultValues },
        resolver: yupResolver(validationSchema)
    };
    const { register, handleSubmit, setError, formState, watch } = useForm(formOptions);
    const { errors } = formState;

    const watchAvatar = watch('avatar', false);
    async function onSubmit(data) {
        setIsSubmitting(true);
        try {
            console.log('data :>> ', data);
            // call api edit channel
            // onCreateChannel(data);
            setTimeout(() => {
                toast.success('Edit Channel success');
                onSuccess();
            }, 500);
        } catch (error) {
            console.log('error :>> ', error);
        }
        // setIsSubmitting(false);
    }
    //   -------------------------------------------------------------
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <Grid container spacing={2}>
                    {/* <Typography variant="body1">asdf</Typography> */}
                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '150px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <InputImage {...register('avatar')} accept="image/*" type="file" aria-label="File browser example" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                width: '150px',
                                height: '150px'
                            }}
                        >
                            {!watchAvatar ? (
                                <Avatar
                                    alt="Avatar"
                                    src=""
                                    sx={{
                                        width: 150,
                                        height: 150,
                                        margin: '0 auto !important',
                                        objectFit: 'cover',
                                        border: '2px solid #1E88E5'
                                    }}
                                />
                            ) : (
                                <Avatar
                                    alt="Avatar"
                                    src={URL.createObjectURL(watchAvatar[0])}
                                    sx={{
                                        width: 150,
                                        height: 150,
                                        margin: '0 auto !important',
                                        objectFit: 'cover',
                                        border: '2px solid #1E88E5'
                                    }}
                                />
                            )}
                        </Box>
                    </Grid>
                </Grid>

                <TextField
                    {...register('channel_name')}
                    fullWidth
                    autoComplete="channel_name"
                    type="text"
                    label="Channel's Name"
                    error={Boolean(errors.channel_name)}
                    helperText={Boolean(errors.channel_name) && errors.channel_name.message}
                />
                <TextField
                    {...register('email')}
                    fullWidth
                    autoComplete="email"
                    type="email"
                    label="Email"
                    error={Boolean(errors.email)}
                    helperText={Boolean(errors.email) && errors.email.message}
                />

                <TextField
                    {...register('description')}
                    fullWidth
                    autoComplete="description"
                    multiline
                    minRows={2}
                    maxRows={4}
                    type="text"
                    label="Description"
                    error={Boolean(errors.description)}
                    helperText={Boolean(errors.description) && errors.description.message}
                />
            </Stack>

            <LoadingButton
                sx={{ marginTop: '1rem' }}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                loadingIndicator={<CircularProgress color="inherit" size={16} />}
            >
                Submit
            </LoadingButton>
        </form>
    );
}
