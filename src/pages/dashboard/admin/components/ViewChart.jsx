import PropTypes from 'prop-types';

// material-ui
import { Grid, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// project imports
import ViewChartSkeleton from './ViewChartSkeleton';
import MainCard from 'components/cards/MainCard';
import { gridSpacing } from 'store/constant';

// chart data

// const status = [
//     {
//         value: 'today',
//         label: 'Today'
//     },
//     {
//         value: 'month',
//         label: 'This Month'
//     },
//     {
//         value: 'year',
//         label: 'This Year'
//     }
// ];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

// eslint-disable-next-line arrow-body-style
const ViewChart = ({ isLoading, data }) => {
    // const [value, setValue] = useState('today');
    // const theme = useTheme();
    // const customization = useSelector((state) => state.customization);

    // const { navType } = customization;
    // const { primary } = theme.palette.text;
    // const darkLight = theme.palette.dark.light;
    // const grey200 = theme.palette.grey[200];
    // const grey500 = theme.palette.grey[500];

    // const primary200 = theme.palette.primary[200];
    // const primaryDark = theme.palette.primary.dark;
    // const secondaryMain = theme.palette.secondary.main;
    // const secondaryLight = theme.palette.secondary.light;

    // useEffect(() => {
    //     const newChartData = {
    //         ...chartData.options,
    //         colors: [primary200, primaryDark, secondaryMain, secondaryLight],
    //         xaxis: {
    //             labels: {
    //                 style: {
    //                     colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
    //                 }
    //             }
    //         },
    //         yaxis: {
    //             labels: {
    //                 style: {
    //                     colors: [primary]
    //                 }
    //             }
    //         },
    //         grid: {
    //             borderColor: grey200
    //         },
    //         tooltip: {
    //             theme: 'light'
    //         },
    //         legend: {
    //             labels: {
    //                 colors: grey500
    //             }
    //         }
    //     };

    //     // do not load chart when loading
    //     if (!isLoading) {
    //         ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
    //     }
    // }, [navType, primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, grey200, isLoading, grey500]);

    return (
        <>
            {isLoading ? (
                <ViewChartSkeleton />
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <Typography variant="h3">View Chart</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">View Chart</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    {/* <TextField
                                        id="standard-select-currency"
                                        select
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                    >
                                        {status.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField> */}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Chart {...data} />
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

ViewChart.propTypes = {
    isLoading: PropTypes.bool,
    data: PropTypes.object
};

export default ViewChart;
