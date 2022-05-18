/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-use-before-define */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';

// material-ui
import { Grid, Box, Stack, Chip, Typography, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// project imports
import ButtonDelete from 'components/buttons/ButtonDelete';
import ButtonEdit from 'components/buttons/ButtonEdit';
import ButtonDetail from 'components/buttons/ButtonDetail';
import { gridSpacing } from 'store/constant';

// Chart imports
import ViewChart from './components/ViewChart';
import ChartItem from './components/ChartItem';
import TopVideo from './components/TopVideo';

// card components
import 'antd/dist/antd.css';
// datate range
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const _viewChartData = {
    height: 480,
    type: 'bar',
    options: {
        chart: {
            height: 350,
            type: 'line'
        },
        stroke: {
            width: [0, 4]
        },
        title: {
            text: 'Traffic Sources'
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
        },
        labels: [
            '01 Jan 2001',
            '02 Jan 2001',
            '03 Jan 2001',
            '04 Jan 2001',
            '05 Jan 2001',
            '06 Jan 2001',
            '07 Jan 2001',
            '08 Jan 2001',
            '09 Jan 2001',
            '10 Jan 2001',
            '11 Jan 2001',
            '12 Jan 2001'
        ],
        xaxis: {
            type: 'datetime'
        },
        yaxis: [
            {
                title: {
                    text: 'Views'
                }
            }
            // {
            // opposite: true,
            // title: {
            //     text: 'Social Media'
            // }
            // }
        ]
    },
    series: [
        {
            name: 'Views',
            type: 'column',
            data: [0, 0, 0, 0, 227, 413, 201, 352, 752, 320, 257, 160]
        },
        {
            name: 'Views line',
            type: 'line',
            data: [0, 0, 0, 0, 227, 413, 201, 352, 752, 320, 257, 160]
        }
    ]
};

const _interactiveChartData = {
    type: 'pie',
    // width: '90%',
    series: [44, 55, 13, 43, 22],
    options: {
        chart: {
            width: 380,
            type: 'pie'
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        ]
    }
};

// data grid
const columns = [
    { field: 'id', hide: true },
    {
        field: 'info_channel',
        headerName: 'Info Channel',
        minWidth: 400,
        flex: 4,
        headerClassName: 'headerCustom',
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

            return (
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                    <Box sx={{ width: '100px', height: '100px', background: 'grey', borderRadius: '12px' }}>aaa</Box>
                    <Box
                        sx={{
                            marginLeft: '8px !important',
                            '& .title': {
                                textTransform: 'uppercase',
                                fontSize: '1rem',
                                fontWeight: '500'
                            }
                        }}
                    >
                        <Typography className="title">VTC Now</Typography>
                        <Button variant="outlined">Google AdSence</Button>
                    </Box>
                </Stack>
            );
        }
    },
    {
        field: 'status',
        headerName: 'Status',
        minWidth: 90,
        flex: 1,
        headerClassName: 'headerCustom',
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

            return (
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                    <Chip label="Active" color="success" />
                </Stack>
            );
        }
    },
    {
        field: 'videos',
        headerName: 'Videos',
        minWidth: 150,
        flex: 1,
        headerClassName: 'headerCustom',
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

            return (
                <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ padding: 0 }}>
                    <Box sx={{ height: '80px', padding: 0 }}>
                        <ChartItem />
                    </Box>
                    <Box sx={{ padding: '5px', marginTop: '5px !important' }}>
                        <Typography sx={{ color: '#1E88E5', fontSize: '16px', fontWeight: '500' }}>27.000</Typography>
                    </Box>
                </Stack>
            );
        }
    },
    {
        field: 'views',
        headerName: 'Views',
        minWidth: 150,
        flex: 1,
        headerClassName: 'headerCustom',
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

            return (
                <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ padding: 0 }}>
                    <Box sx={{ height: '80px', padding: 0 }}>
                        <ChartItem />
                    </Box>
                    <Box sx={{ padding: '5px', marginTop: '5px !important' }}>
                        <Typography sx={{ color: '#1E88E5', fontSize: '16px', fontWeight: '500' }}>20.730.772</Typography>
                    </Box>
                </Stack>
            );
        }
    },
    {
        field: 'subcribes',
        headerName: 'Subcribes',
        minWidth: 150,
        flex: 1,
        headerClassName: 'headerCustom',
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

            return (
                <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ padding: 0 }}>
                    <Box sx={{ height: '80px', padding: 0 }}>
                        <ChartItem />
                    </Box>
                    <Box sx={{ padding: '5px', marginTop: '5px !important' }}>
                        <Typography sx={{ color: '#1E88E5', fontSize: '16px', fontWeight: '500' }}>30.000</Typography>
                    </Box>
                </Stack>
            );
        }
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
    }
];
const DashboardChannel = () => {
    const startDate = moment().subtract(7, 'd').format(dateFormat);
    const endDate = moment().format(dateFormat);
    const [isLoading, setLoading] = useState(true);
    const [viewChartData, setViewChartData] = useState(null);
    const [interactiveChartData, setInteractiveChartData] = useState(null);

    console.table(startDate, endDate);

    const [rangeDate, setRangeDate] = useState([startDate, endDate]);

    useEffect(() => {
        setLoading(true);
        getViewChartData();
        getInteractiveChartData();
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, [rangeDate]);

    useEffect(() => {
        if (Boolean(viewChartData) && Boolean(interactiveChartData)) {
            setTimeout(() => {
                // setLoading(false);
            }, 500);
        }
    }, [viewChartData, interactiveChartData]);

    const getViewChartData = async () => {
        try {
            setViewChartData({ ..._viewChartData });
        } catch (error) {
            console.log('error :>> ', error);
        }
    };

    const getInteractiveChartData = async () => {
        try {
            setInteractiveChartData({ ..._interactiveChartData });
        } catch (error) {
            console.log('error :>> ', error);
        }
    };

    const onChangeRangeDate = (date, dateString) => {
        if (date === null) {
            console.log('1231231232');
            setRangeDate([moment(startDate), moment(endDate)]);
        } else {
            console.log('122222222222222222222');
            setRangeDate([...dateString]);
        }
        // console.log('date, dateString :>> ', date, dateString);
    };

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Box
                    sx={{
                        '& .ant-picker': {
                            height: '40px',
                            borderRadius: '12px'
                        },
                        '& .ant-picker-panel-container': {
                            borderRadius: '12px'
                        },
                        '& .ant-picker-cell-inner': {
                            borderRadius: '12px'
                        }
                    }}
                >
                    <RangePicker
                        value={[moment(rangeDate[0]), moment(rangeDate[1])]}
                        // defaultValue={[moment(rangeDate[0], dateFormat), moment(rangeDate[1], dateFormat)]}
                        format={dateFormat}
                        onChange={onChangeRangeDate}
                    />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box
                    sx={{
                        height: 200,
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
                            backgroundColor: '#fff',
                            border: 1,
                            borderColor: 'primary.light',
                            '& .MuiDataGrid-cell:hover': {
                                color: 'primary.main'
                            },
                            '& .MuiDataGrid-row': {
                                height: '200px !important'
                            },
                            textAlign: 'center'
                        }}
                        // eslint-disable-next-line arrow-body-style
                        getRowHeight={({ id, densityFactor }) => {
                            // if (id === 0) {
                            //     return 100 * densityFactor;
                            // }

                            // return null;
                            return 140 * densityFactor;
                        }}
                        rows={rows}
                        columns={columns}
                        hideFooter
                    />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={6}>
                        <ViewChart isLoading={isLoading} data={viewChartData} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TopVideo />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DashboardChannel;
