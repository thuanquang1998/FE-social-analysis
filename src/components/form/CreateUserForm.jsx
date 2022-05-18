import { useState } from 'react';
// material
// eslint-disable-next-line import/no-duplicates
import { Link, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// eslint-disable-next-line import/no-duplicates
import { CircularProgress } from '@mui/material';
// component
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// ----------------------------------------------------------------------

export default function CreateUserForm() {
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
        password: ''
    };
    const formOptions = {
        defaultValues: { ...defaultValues },
        resolver: yupResolver(validationSchema)
    };
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { errors } = formState;

    async function onSubmit({ username, password }) {
        setIsSubmitting(true);
        try {
            console.log('onSubmit ', username, '  ', password, '   1111111111');
        } catch (error) {
            console.log('error :>> ', error);
        }
        setIsSubmitting(false);
    }
    //   -------------------------------------------------------------

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

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                <Link variant="subtitle2" href="#" underline="hover">
                    Forgot password?
                </Link>
            </Stack>

            <LoadingButton
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
