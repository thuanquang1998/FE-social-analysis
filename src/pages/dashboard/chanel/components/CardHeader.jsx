import { Typography, Stack } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { styled } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const CardWrapper = styled(MainCard)(({ theme, increase }) => ({
    // eslint-disable-next-line dot-notation
    color: theme.palette.text.dark,
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
    transition: '0.8s all',
    '&:before': {
        content: '""',
        width: '100%',
        paddingTop: '100%',
        borderRadius: '50%',
        backgroundImage: 'linear-gradient(to top right, #1E88E5, #1E88E5)',
        position: 'absolute',
        left: '-50%',
        top: 0,
        transform: 'scale(0)',
        transition: 'transform 0.8s ease 0s',
        zIndex: -1
    },
    '&:hover': {
        '& .title': {
            color: '#fff'
        },
        '& .value': {
            color: '#fff'
        },
        '& .description': {
            color: '#fff',
            '& span': {
                color: increase ? theme.palette.success.dark : 'red'
            }
        }
    },
    '&:hover::before': {
        transform: 'scale(3)'
    },

    // text
    '& .title': {
        fontSize: '1rem',
        fontWeight: '500',
        textTransform: 'uppercase',
        color: theme.palette.text.dark
    },
    '& .value': {
        fontSize: '1.8rem',
        fontWeight: '500',
        textTransform: 'uppercase',
        marginTop: '0.5rem',
        color: theme.palette.text.dark
    },
    '& .description': {
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        marginTop: '0',
        color: theme.palette.text.primary,
        '& span': {
            fontWeight: '600',
            // color: theme.palette.success.dark,
            color: increase ? theme.palette.success.dark : 'red',
            position: 'relative',
            '& .MuiSvgIcon-root': {
                fontSize: '1rem',
                position: 'absolute',
                bottom: '2px'
            }
        }
    }
}));

function CardHeader({ data }) {
    const { title, amount, description, percent, up } = data;
    const type = 'up';
    return (
        <CardWrapper increase={up}>
            <Stack spacing={2}>
                <Typography className="title">{title}</Typography>
                <Typography className="value">{amount}</Typography>
                <Typography className="description">
                    {description}{' '}
                    <span>
                        {percent} {up ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                    </span>
                </Typography>
            </Stack>
        </CardWrapper>
    );
}

export default CardHeader;
