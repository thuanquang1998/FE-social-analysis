import { useState } from 'react';
// material
import { styled } from '@mui/material/styles';
import { Stack, Grid, Box, Button, CircularProgress } from '@mui/material';
// component
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// form controls
import InputField from 'components/form/form-control/InputField';
import SelectMultiField from 'components/form/form-control/SelectMultiField';

// ----------------------------------------------------------------------
const GridItem = styled(Grid)({
    '& .MuiFormControl-root ': {
        marginTop: '2rem'
    }
});
// const formData = {
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     role: '', //select
//     user_group: '' //select
// };

export default function EditUsersForm({ userData, onSuccess }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    //   ---------------------- setup hook form ----------------------
    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('Fullname is required'),
        email: Yup.string().required('Email is required').email('Email is not valid')
        // role: Yup.array().min(1, 'Role is required')
        // user_group: Yup.string().required('UserGroup is required')
    });
    const defaultValues = {
        ...userData
    };
    const formOptions = {
        defaultValues: { ...defaultValues },
        resolver: yupResolver(validationSchema)
    };
    const { handleSubmit, control } = useForm(formOptions);

    async function onSubmit(data) {
        setIsSubmitting(true);
        try {
            console.log('data onSubmit EditUsersForm:>> ', data);
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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box
                sx={{
                    textAlign: 'center',
                    margin: '0 3rem',
                    '& .Mui-disabled': {
                        backgroundColor: '#2196f3 !important',
                        color: '#fff'
                    }
                }}
            >
                <Stack spacing={0}>
                    <Grid container spacing={2}>
                        <GridItem item xs={12} sm={6}>
                            <InputField name="fullName" label="Full Name" control={control} />
                        </GridItem>
                        <GridItem item xs={12} sm={6}>
                            <InputField name="email" label="Email" control={control} />
                        </GridItem>
                    </Grid>
                    <Grid container spacing={2}>
                        <GridItem item xs={12} sm={6}>
                            <SelectMultiField name="role" label="Role" control={control} selectData={['user', 'admin', 'user-group']} />
                        </GridItem>
                        <GridItem item xs={12} sm={6}>
                            <SelectMultiField
                                name="user_group"
                                label="Group"
                                control={control}
                                selectData={['Moli Digital', 'Moli Labs', 'Moli Stars']}
                            />
                        </GridItem>
                    </Grid>
                </Stack>
                <Button
                    variant="contained"
                    sx={{ marginTop: '1.5rem', marginBottom: '1rem', width: '200px', borderRadius: '12px' }}
                    fullWidth
                    size="large"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            Submit <CircularProgress color="inherit" size={16} sx={{ marginLeft: '5px' }} />
                        </>
                    ) : (
                        'Submit'
                    )}
                </Button>
            </Box>
        </form>
    );
}
