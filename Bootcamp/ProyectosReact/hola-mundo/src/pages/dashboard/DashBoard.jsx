import React from 'react';
import Button from '@mui/material/Button';
import CopyRight from '../../components/pure/CopyRight';
import { useNavigate } from 'react-router-dom';

const DashBoardPage = () => {   
    
    const navigate = useNavigate();

    return (
        <div>
            <Button variant="contained" onClick={() => navigate('/login')}>Logout</Button>
            <CopyRight></CopyRight>
        </div>
    );
}

export default DashBoardPage;
