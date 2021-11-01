import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    error: {
        justify: "center",
        justifyContent: "center",
        color: theme.palette.error.main,
    },
    success: {
        // justify: "center",
        // justifyContent: "center",
        color: theme.palette.success.main,
    },
    text: {
        fontSize: theme.typography.pxToRem(18),
    }
}));