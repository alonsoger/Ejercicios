import React from 'react';

//Material UI Components
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'


const CopyRight = () => {
    return (
        <div>
            <Typography variant="body2" color="GrayText" align="center">
                {'Copyright (C)'}
                <Link color="inherit" href="*">
                    Imagina Formacion - Link a algun lado
                </Link>
            </Typography>
        </div>
    );
}

export default CopyRight;
