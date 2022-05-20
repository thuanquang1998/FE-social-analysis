/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import { FormControl, InputLabel, Select, OutlinedInput, Box, Chip, MenuItem } from '@mui/material';
import { Controller } from 'react-hook-form';
import CancelIcon from '@mui/icons-material/Cancel';
import _without from 'lodash/without';

function SelectMultiField({ name, label, control, selectData }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, formState }) => {
                const { errors } = formState;
                const handleDelete = (e, value) => {
                    e.preventDefault();
                    // eslint-disable-next-line no-undef
                    const _data = _without(field.value, value);
                    field.onChange(_data);
                };
                return (
                    <FormControl fullWidth>
                        <InputLabel>{label}</InputLabel>
                        <Select
                            multiple
                            value={field.value}
                            onChange={(data) => field.onChange(data)}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip
                                            sx={{ background: '#00C853', color: '#fff', margin: '2px' }}
                                            key={value}
                                            label={value}
                                            clickable
                                            deleteIcon={<CancelIcon onMouseDown={(event) => event.stopPropagation()} />}
                                            onDelete={(e) => handleDelete(e, value)}
                                        />
                                    ))}
                                </Box>
                            )}
                            // MenuProps={MenuProps}
                        >
                            {selectData.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    // style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                );
            }}
        />
    );
}

export default SelectMultiField;
