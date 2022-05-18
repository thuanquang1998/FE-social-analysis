/* eslint-disable no-underscore-dangle */
// material-ui
import { Grid } from '@mui/material';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import ViewChartSkeleton from './ViewChartSkeleton';
import MainCard from 'components/cards/MainCard';
import { gridSpacing } from 'store/constant';

// chart data

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

// eslint-disable-next-line arrow-body-style
const ChartItem = ({ isLoading = false, data = {} }) => {
    const chartData = {
        height: 100,
        width: '100%',
        type: 'bar',
        options: {
            chart: {
                height: '100%',
                width: '100%',
                type: 'line',
                id: 'bar-chart',
                toolbar: {
                    show: false
                }
            },
            stroke: {
                width: [0, 4]
            },
            dataLabels: {
                enabled: false,
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
                // type: 'datetime'
                labels: {
                    show: false
                }
            },
            yaxis: [
                {
                    title: {
                        // text: 'Views'
                    },
                    labels: {
                        show: false
                    }
                }
            ]
        },
        series: [
            {
                name: 'Views',
                type: 'column',
                data: [342, 123, 567, 765, 227, 413, 201, 352, 752, 320, 257, 160]
            }
        ]
    };

    return (
        <>
            <Chart {...chartData} />
        </>
    );
};

export default ChartItem;
