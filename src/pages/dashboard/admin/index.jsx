/* eslint-disable no-use-before-define */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';

// material-ui
import { Grid, Box } from '@mui/material';

// project imports

import { gridSpacing } from 'store/constant';

// Chart imports
import ViewChart from './components/ViewChart';
import ChartInteractive from './components/ChartInteractive';
// card components
import CardHeader from './components/CardHeader';
// import 'antd/dist/antd.css';
import 'antd/lib/date-picker/style/css';
// datate range
import { DatePicker } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const dataCard = [
    {
        title: 'Total Channel',
        amount: '200',
        description: '1 channel added',
        percent: '100%',
        up: true
    },
    {
        title: 'Total Videos',
        amount: '2.983',
        description: '59 videos added',
        percent: '100%',
        up: true
    },
    {
        title: 'Total Views',
        amount: '25.005.465',
        description: 'Compared with time before',
        percent: '20%',
        up: false
    },
    {
        title: 'Total subcribes',
        amount: '50.000',
        description: 'Compared with time before',
        percent: '10%',
        up: false
    }
];

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
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top' // top, center, bottom
                }
            }
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1],
            offsetY: -10,
            style: {
                fontSize: '12px',
                colors: ['#304758']
            }
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
const Dashboard = () => {
    const CURRENT_WEEK = moment();

    const [isLoading, setLoading] = useState(true);
    const [viewChartData, setViewChartData] = useState(null);
    const [interactiveChartData, setInteractiveChartData] = useState(null);

    const [currentWeek, setCurrentWeek] = useState(CURRENT_WEEK);

    useEffect(() => {
        setLoading(true);
        getViewChartData();
        getInteractiveChartData();
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, [currentWeek]);

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

    const onChangeWeek = (date, dateString) => {
        if (!date) {
            setCurrentWeek(moment());
        } else {
            setCurrentWeek(moment(date));
        }
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
                    <DatePicker value={currentWeek} onChange={onChangeWeek} format={dateFormat} picker="week" />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    {dataCard.map((item, index) => (
                        <Grid item lg={3} md={6} sm={6} xs={12} key={index}>
                            <CardHeader data={{ ...item }} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <ViewChart isLoading={isLoading} data={viewChartData} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ChartInteractive isLoading={isLoading} data={interactiveChartData} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
