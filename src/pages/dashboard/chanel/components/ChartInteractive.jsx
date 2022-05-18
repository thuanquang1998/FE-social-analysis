import PropTypes from 'prop-types';
// material-ui
import { Grid, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// project imports
import ViewChartSkeleton from './ViewChartSkeleton';
import MainCard from 'components/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

// eslint-disable-next-line arrow-body-style
const ChartInteractive = ({ isLoading, data }) => {
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
                                            <Typography variant="h3">Interactive Chart</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">Interactive Chart</Typography>
                                        </Grid>
                                    </Grid>
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

ChartInteractive.propTypes = {
    isLoading: PropTypes.bool,
    data: PropTypes.object
};

export default ChartInteractive;
