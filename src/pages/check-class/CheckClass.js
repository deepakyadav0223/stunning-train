import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';


import CheckWrapper from './CheckWrapper';
import CheckForm from "./CheckForm";
// ================================|| REGISTER ||================================ //

const CheckClass = () => (
    <CheckWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row"  sx={{ mb: { xs: -0.5, sm: 1 } }}>
                     <Typography  component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="purple"> 
                        &#8592; Back to Dashboard
                     </Typography>

                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Check Class</Typography>
                    {/* <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        CheckOut from booked class?
                    </Typography> */}
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <CheckForm />
            </Grid>
        </Grid>
    </CheckWrapper>
);

export default CheckClass;
