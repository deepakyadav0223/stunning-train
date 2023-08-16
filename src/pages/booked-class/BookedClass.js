import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';


import MainCard from 'components/MainCard';





const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'txId', headerName: 'Transaction No.', width: 200 },
    { field: 'className', headerName: 'Class name', width: 160 },
    { field: 'date', headerName: 'Booking Date', width: 150 },
    { field: 'bookedTime', headerName: 'Booked Time', width: 170 },
    { field: 'bookedTill', headerName: 'Booked Till', width: 170 },
    { field: 'bookedBy', headerName: 'Booked By', width: 400 },
    

    
  ];
  
  const rows = [
    { id: 1, txId: '10025896', className: 'LT-404', date: '2022/01/31', bookedTime: '11:30 AM', bookedTill: "02:30 PM", bookedBy: "Dr. Shreenav Khandelwal"},
    { id: 2, txId: '10025896', className: 'LT-404', date: '2022/01/31', bookedTime: '11:30 AM', bookedTill: "02:30 PM", bookedBy: "Dr. Shreenav Khandelwal"},
    
  ];

export default function BookedClass() {
    return (
        <MainCard title ="Booked Classes" border divider>
            <Box
       sx={{
        height: 400,
        width: '100%',
            }}
            >
                <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                style={{fontSize : "1.2rem"}}
                sx={{
                    boxShadow: 0.5,
                    bg:'green'
                  }}
                />
            </Box>
      </MainCard>
    );
  }