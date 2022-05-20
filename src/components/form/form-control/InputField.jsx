import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

function InputField({ name, label, control }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, formState }) => {
                const { errors } = formState;
                return (
                    <>
                        <TextField
                            fullWidth
                            autoComplete="fullName"
                            type="text"
                            label={label}
                            onChange={(data) => field.onChange(data)}
                            value={field.value}
                            error={Boolean(errors[name])}
                            helperText={Boolean(errors[name]) && errors[name].message}
                        />
                    </>
                );
            }}
        />
    );
}

export default InputField;
