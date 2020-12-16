import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor } from './colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: '#000'
        }
    },
    typography: {
        fontFamily: [
            '"Roboto Regular"',
            'Roboto',
            'Helvetica',
            'Arial',
            'sans-serif'
        ].join(','),
        fontWeight: 500,
    }
})

export default theme; 