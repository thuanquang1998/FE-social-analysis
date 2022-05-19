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

// ----------------------------------------------------------------------

export default function EditUserGroupForm({ userData, onSuccess }) {
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    //   ---------------------- setup hook form ----------------------
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const defaultValues = {
        username: '',
        password: '',
        ...userData
    };
    const formOptions = {
        defaultValues: { ...defaultValues },
        resolver: yupResolver(validationSchema)
    };
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { errors } = formState;

    async function onSubmit(data) {
        setIsSubmitting(true);
        try {
            console.log('data :>> ', data);
            // call api edit channel
            // onCreateChannel(data);
            setTimeout(() => {
                toast.success('Create Users success');
                onSuccess();
            }, 800);
        } catch (error) {
            console.log('error :>> ', error);
        }
        // setIsSubmitting(false);
    }
    //   -------------------------------------------------------------
    console.log('formState.isSubmitting :>> ', formState.isSubmitting);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <TextField
                    {...register('username')}
                    fullWidth
                    autoComplete="username"
                    type="text"
                    label="Username"
                    error={Boolean(errors.username)}
                    helperText={Boolean(errors.username) && errors.username.message}
                />

                <TextField
                    fullWidth
                    {...register('password')}
                    autoComplete="current-password"
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword} edge="end">
                                    {/* <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} /> */}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    error={Boolean(errors.password)}
                    helperText={Boolean(errors.password) && errors.password.message}
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
