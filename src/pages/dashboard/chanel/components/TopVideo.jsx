import React from 'react';
import { Grid, Typography, Box, Stack, Button } from '@mui/material';
import { gridSpacing } from 'store/constant';
import MainCard from 'components/cards/MainCard';

// eslint-disable-next-line arrow-body-style
const NewItem = (data) => {
    return (
        <Box sx={{ height: '65px', marginTop: '8px', width: '95%' }}>
            <Grid
                container
                spacing={gridSpacing}
                sx={{
                    margin: 0,
                    paddingRight: '24px',
                    '& .MuiGrid-item': {
                        padding: 0,
                        width: '100%'
                    }
                }}
            >
                <Grid item xs={8}>
                    <Stack direction="row" spacing={2} justifyContent="start" alignItems="center">
                        <Box
                            sx={{
                                width: '65px',
                                height: '65px',
                                background: 'grey',
                                flexShrink: 0,
                                borderRadius: '12px'
                            }}
                        >
                            Avatar
                        </Box>
                        <Box
                            sx={{
                                flexShrink: 1,
                                marginLeft: '8px !important',
                                width: '80%',
                                '& .content': {
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    whiteSpace: 'nowrap',
                                    width: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    color: 'black'
                                },
                                '& .title': {
                                    textTransform: 'uppercase',
                                    fontSize: '0.875rem',
                                    fontWeight: '500'
                                }
                            }}
                        >
                            <Typography className="content">Phần Lan, Thụy Điển nộp đơn xin gia nhập NATO</Typography>
                            <Typography className="title">VTC Now</Typography>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                    <Stack spacing={2} justifyContent="center" alignItems="end">
                        <Box
                            sx={{
                                '& .content': {
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    textAlign: 'right'
                                },
                                '& .title': {
                                    textTransform: 'uppercase',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    color: 'green',
                                    textAlign: 'right'
                                }
                            }}
                        >
                            <Typography className="content">+2.280.198</Typography>
                            <Typography className="title">3.675.941</Typography>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

function TopVideo(props) {
    return (
        <MainCard>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography variant="h3">Top Videos</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle2">Top Videos</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>Action?</Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Box
                sx={{
                    maxHeight: '500px',
                    overflow: 'scroll'
                }}
            >
                {[...Array(10).keys()].map((item, index) => (
                    <NewItem key={index} data={item} />
                ))}
            </Box>
        </MainCard>
    );
}

export default TopVideo;
