import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
    Box,
    Button,
    FormHelperText,
    Grid,
    Link,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import

import AnimateButton from 'components/@extended/AnimateButton';



// ============================|| FIREBASE - REGISTER ||============================ //

const CheckForm = () => {

    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    

    

    return (
        <>
            <Formik
                initialValues={{
                    classname: ' ',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    classname: Yup.string().max(255).required('Class Name is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        console.log(values);
                        setStatus({ success: false });
                        setSubmitting(false);
                    } catch (err) {
                        console.error(err);
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="classname-signup">Class Name*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.purpose && errors.purpose)}
                                        id="classname-signup"
                                        value={values.classname}
                                        name="classname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="LT-404"
                                        inputProps={{}}
                                    />
                                    {touched.classname && errors.classname && (
                                        <FormHelperText error id="helper-text-company-signup">
                                            {errors.classname}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Check Class Status
                                    </Button>
                                </AnimateButton>


                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default CheckForm;
