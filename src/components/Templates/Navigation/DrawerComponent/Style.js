import {makeStyles} from '@material-ui/core/styles';
import { alpha } from '@mui/material/styles';

export const useStyles = makeStyles((theme) => ({
    list: {
        width: 250
    },
    linkto: {
        textDecoration: 'none',
        color: alpha(theme.palette.common.black, 1),
    },
    hidden: {
        visibility: "hidden",
        position: "relative"
    }
}));