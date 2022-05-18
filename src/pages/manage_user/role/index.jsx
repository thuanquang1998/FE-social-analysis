import React, { useState } from 'react';
import MainCard from 'components/cards/MainCard';
import SecondaryAction from 'components/cards/CardSecondaryAction';
import { Stack, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// import tables component
import StyledTableCell from 'components/tables/StyledTableCell';
import StyledTableRow from 'components/tables/StyledTableRow';

import ButtonCreate from 'components/buttons/ButtonCreate';
import ButtonDelete from 'components/buttons/ButtonDelete';
import ButtonEdit from 'components/buttons/ButtonEdit';
import ButtonDetail from 'components/buttons/ButtonDetail';

const columns = [
    { field: 'id', hide: true },
    {
        field: 'role',
        headerName: 'Type role',
        minWidth: 130,
        flex: 1,
        headerClassName: 'headerCustom'
    },
    {
        field: 'description',
        headerName: 'Description',
        minWidth: 130,
        flex: 1,
        headerClassName: 'headerCustom'
    },
    {
        field: 'amount',
        headerName: 'Users',
        minWidth: 90,
        flex: 1,
        headerClassName: 'headerCustom'
    },
    {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        minWidth: 200,
        flex: 1,
        renderCell: (params) => {
            const getData = () => {
                const api = params.api;
                const thisRow = {};

                api.getAllColumns()
                    .filter((c) => c.field !== '__check__' && !!c)
                    // eslint-disable-next-line no-return-assign
                    .forEach((c) => (thisRow[c.field] = params.getValue(params.id, c.field)));
                return thisRow;
            };

            const onClickDetail = async (e) => {
                e.stopPropagation();
                try {
                    const data = await getData();
                    console.log('data onClickDetail:>> ', data);
                } catch (error) {
                    console.log('error :>> ', error);
                }
            };

            const onClickDelete = async (e) => {
                e.stopPropagation();
                try {
                    const data = await getData();
                    console.log('data onClickDelete:>> ', data);
                } catch (error) {
                    console.log('error :>> ', error);
                }
            };

            const onClickEdit = async (e) => {
                e.stopPropagation();
                try {
                    const data = await getData();
                    console.log('data onClickEdit:>> ', data);
                } catch (error) {
                    console.log('error :>> ', error);
                }
            };
            return (
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                    <ButtonDetail handleClick={onClickDetail} />

                    <ButtonEdit handleClick={onClickEdit} />

                    <ButtonDelete handleClick={onClickDelete} />
                </Stack>
            );
        },
        headerClassName: 'headerCustom'
    }
];

const rows = [
    {
        id: 1,
        role: 'Admin',
        description: 'full',
        amount: 2
    },
    {
        id: 2,
        role: 'User',
        description: 'full',
        amount: 2
    },
    {
        id: 3,
        role: 'Admin',
        description: 'full',
        amount: 2
    },
    {
        id: 4,
        role: 'User',
        description: 'full',
        amount: 2
    },
    {
        id: 5,
        role: 'Admin',
        description: 'full',
        amount: 2
    },
    {
        id: 6,
        role: 'User',
        description: 'full',
        amount: 2
    },
    {
        id: 7,
        role: 'Admin',
        description: 'full',
        amount: 2
    },
    {
        id: 8,
        role: 'User',
        description: 'full',
        amount: 2
    }
];

function Role(props) {
    return (
        <MainCard title="Role" secondary={<ButtonCreate title="Add Role" handleClick={() => console.log('ooooooooooooooooo')} />}>
            <Box
                sx={{
                    height: 400,
                    width: 1,
                    '& .headerCustom': {
                        fontWeight: 800,
                        color: 'black',
                        display: 'none'
                    }
                }}
            >
                <DataGrid
                    // eslint-disable-next-line react/jsx-boolean-value
                    // loading={true}
                    sx={{
                        boxShadow: 2,
                        border: 1,
                        borderColor: 'primary.light',
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main'
                        },
                        textAlign: 'center'
                    }}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    treeData
                />
            </Box>
        </MainCard>
    );
}

export default Role;
