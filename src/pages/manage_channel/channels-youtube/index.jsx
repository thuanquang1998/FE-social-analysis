/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import MainCard from 'components/cards/MainCard';

// import tables component
import StyledTableCell from 'components/tables/StyledTableCell';
import StyledTableRow from 'components/tables/StyledTableRow';

// button component
import ButtonCreate from 'components/buttons/ButtonCreate';
import ButtonDelete from 'components/buttons/ButtonDelete';
import ButtonEdit from 'components/buttons/ButtonEdit';

// Model
import ModalDetail from 'components/modals/ModalDetail';
import ModalConfirm from 'components/modals/ModalConfirm';

// Form
import CreateChannelForm from './components/CreateChannelForm';
import EditChannelForm from './components/EditChannelForm';

import { toast } from 'react-toastify';

import {
    Box,
    Chip,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    CircularProgress,
    Typography,
    Avatar
} from '@mui/material';

const listData = [
    {
        id: 1,
        channel_name: 'VTC Nows',
        email: 'vtc@gmail.com',
        status: 'Active'
    },
    {
        id: 2,
        channel_name: 'Kenh 14',
        email: 'vtc@gmail.com',
        status: 'Active'
    },
    {
        id: 3,
        channel_name: 'Zing news',
        email: 'vtc@gmail.com',
        status: 'Active'
    }
];

function ChannelsYoutube(props) {
    // =================================== STATE ===================================
    const [loading, setLoading] = useState(true);

    const [tableData, setTableData] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // state modals CRUD
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState({
        open: false,
        data: null
    });
    const [showModalDelete, setShowModalDelete] = useState({
        open: false,
        data: null
    });
    const [showModalDetail, setShowModalDetail] = useState({
        open: false,
        data: null
    });

    // =================================== HOOKS ===================================
    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        getListChannel();
    }, []);

    // =================================== FUNCTIONS ===================================
    const getListChannel = async () => {
        setLoading(true);
        try {
            const response = [...listData];
            if (response.length < 0) throw new Error('Somethings errors');
            setTimeout(() => {
                setTableData([...response]);
                setLoading(false);
            }, 500);
        } catch (error) {
            console.log('error :>> ', error);
            setLoading(false);
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const onCreateChannelSuccess = () => {
        setShowModalCreate(false);
        getListChannel();
    };

    const onEditChannelSuccess = () => {
        setShowModalEdit({ ...showModalEdit, open: false, data: null });
        getListChannel();
    };

    const onDeleteChannel = async (event) => {
        setLoading(true);
        try {
            setShowModalDelete({ ...showModalDelete, open: false, data: null });
            // call api
            setTimeout(() => {
                toast.success(`Delete Channel ${event.channel_name} success`);
                getListChannel();
            }, 800);
        } catch (error) {
            console.log('error :>> ', error);
            toast.success(error?.message || 'Somethings error');
            setLoading(false);
        }
    };

    return (
        <MainCard title="Channels Youtube" secondary={<ButtonCreate title="Add Channel" handleClick={() => setShowModalCreate(true)} />}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Avatar</StyledTableCell>
                            <StyledTableCell>{`Channel's Name`}</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>
                            <StyledTableCell align="center" style={{ width: '20%' }}>
                                Actions
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading && (
                            <StyledTableRow style={{ height: 300 }}>
                                <StyledTableCell colSpan={6}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            width: '100%',
                                            height: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <CircularProgress />
                                    </Box>
                                </StyledTableCell>
                            </StyledTableRow>
                        )}
                        {!loading &&
                            (rowsPerPage > 0 ? tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : tableData).map(
                                (item, index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell align="center">
                                            <Avatar
                                                alt="Avatar"
                                                src="https://picsum.photos/200"
                                                sx={{ width: 45, height: 45, margin: '0 auto !important', objectFit: 'cover' }}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <Typography variant="h4" gutterBottom component="div">
                                                {item.channel_name}
                                            </Typography>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <Chip size="small" color="primary" label={item.status} />
                                        </StyledTableCell>
                                        <StyledTableCell align="center" style={{ width: '20%' }}>
                                            {/* <ButtonDetail
                                                handleClick={() =>
                                                    setShowModalDetail({
                                                        ...showModalDetail,
                                                        open: true,
                                                        data: { ...item, type: 'show detail' }
                                                    })
                                                }
                                            /> */}

                                            <ButtonEdit
                                                handleClick={() =>
                                                    setShowModalEdit({
                                                        ...showModalEdit,
                                                        open: true,
                                                        data: { ...item, type: 'show edit' }
                                                    })
                                                }
                                            />

                                            <ButtonDelete
                                                handleClick={() =>
                                                    setShowModalDelete({
                                                        ...showModalDelete,
                                                        open: true,
                                                        data: { ...item, type: 'show edit' }
                                                    })
                                                }
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                )
                            )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                // sx={{
                //     textAlign: 'center',
                //     '& .MuiTablePagination-selectLabel': {
                //         marginBottom: 0
                //     },
                //     '& .MuiTablePagination-displayedRows': {
                //         marginBottom: 0
                //     }
                // }}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={tableData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            {/* Modal create */}
            <ModalDetail
                // eslint-disable-next-line react/jsx-curly-brace-presence
                title={'Add Channel'}
                // eslint-disable-next-line react/jsx-curly-brace-presence
                maxWidth={'md'}
                onClose={() => setShowModalCreate(null)}
                aria-labelledby="customized-dialog-title"
                open={Boolean(showModalCreate)}
            >
                <CreateChannelForm onSuccess={onCreateChannelSuccess} />
            </ModalDetail>

            {/* Modal edit */}
            <ModalDetail
                // eslint-disable-next-line react/jsx-curly-brace-presence
                title={'Edit Channel'}
                // eslint-disable-next-line react/jsx-curly-brace-presence
                maxWidth={'md'}
                onClose={() => setShowModalEdit({ ...showModalEdit, open: false, data: null })}
                aria-labelledby="customized-dialog-title"
                open={Boolean(showModalEdit.open)}
            >
                <EditChannelForm channelData={{ ...showModalEdit.data }} onSuccess={onEditChannelSuccess} />
            </ModalDetail>

            <ModalConfirm
                onClose={() => setShowModalDelete({ ...showModalDelete, open: false, data: null })}
                aria-labelledby="customized-dialog-title"
                open={Boolean(showModalDelete.open)}
                data={{ ...showModalDelete.data }}
                onConfirm={onDeleteChannel}
            />

            {/* Modal detail */}
            <ModalDetail
                // eslint-disable-next-line react/jsx-curly-brace-presence
                title={'User Information'}
                // eslint-disable-next-line react/jsx-curly-brace-presence
                maxWidth={'md'}
                onClose={() => setShowModalDetail({ ...showModalDetail, open: false, data: null })}
                aria-labelledby="customized-dialog-title"
                open={Boolean(showModalDetail.open)}
            >
                <Typography gutterBottom>{`${showModalDetail.data?.name} - ${showModalDetail.data?.type}`}</Typography>
            </ModalDetail>
        </MainCard>
    );
}

export default ChannelsYoutube;
