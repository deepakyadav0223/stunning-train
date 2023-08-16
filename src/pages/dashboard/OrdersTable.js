import PropTypes from 'prop-types';
import { useState , useEffect} from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// third-party
import NumberFormat from 'react-number-format';
import { Audio } from  'react-loader-spinner'

// import data;
import TransactionData from "../../assets/Transaction/index"
import formatReceivedData from "../../assets/Transaction/formatReceivedData";

// project import
import Dot from 'components/@extended/Dot';
import "../../assets/third-party/spinner.css"

function createData(trackingNo, name, date, time, fat, carbs, protein) {
    return { trackingNo, name,date,  time, fat, carbs, protein };
}

const rows = [
    createData(84564564, 'LT-304',"2022/02/15",   "11:30 AM" , "For Extra Class", 0, "Dr Preeti Puri"),
    createData(98764564, 'LT-101',"2022/04/21" ,   "04:30 PM", "For Tutorial",1,  "Dr Mamta Khosla"),
    createData(98756325, 'TUT-01',"2020/12/10" ,   "05:30 AM", "For Lab Work",2,  "Dr Deepak Yadav"),
    createData(98652366, 'SB-105', "2022/01/14" ,  "10:30 AM","For Extra Class",1, "Dr John Sinha"),
    createData(13286564, 'SB-104', "2022/10/15" ,   "05:23 AM","For Curricular Activities", 1, "Er Nitin Gupta"),
    createData(86739658, 'SB-304', "2022/04/21" ,   "10:13 AM","For Lab Work", 1, "Dr Geeta Sikha"),
    createData(13256498, 'LT-204', "2022/02/15" ,   "11:30 AM","For Extra Class", 2, "Dr Sheela Tiwari")
   
];

function descendingComparator(a, b, orderBy) {
    // if (b[orderBy] < a[orderBy]) {
    //     return -1;
    // }
    // if (b[orderBy] > a[orderBy]) {
    //     return 1;
    // }
    // return 0;
    // console.log(a);
    let d1 = new Date(a.date + "  "  + a.time);
    let d2 = new Date( b.date + "  "  + b.time);
    if(d1-d2 > 0){
        return 1 ;
    }
    else if(d1-d2 < 0){
        return -1 ;
    }
    else return 0;
    
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'trackingNo',
        align: 'left',
        disablePadding: false,
        label: 'Transaction No.'
    },
    {
        id: 'name',
        align: 'left',
        disablePadding: true,
        label: 'Class Name'
    },

    {
        id: 'date',
        align: 'left',
        disablePadding: true,
        label: 'Date'
    },
    {
        id: 'time',
        align: 'left',
        disablePadding: true,
        label: 'Time'
    },
    {
        id: 'fat',
        align: 'right',
        disablePadding: true,
        label: 'Purpose of Booking'
    },
    {
        id: 'carbs',
        align: 'left',
        disablePadding: false,

        label: 'Status'
    },
    {
        id: 'protein',
        align: 'right',
        disablePadding: false,
        label: 'Booked By'
    }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

OrderTableHead.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
    let color;
    let title;

    switch (status) {
        case 0:
            color = 'warning';
            title = 'Pending';
            break;
        case 1:
            color = 'success';
            title = 'Approved';
            break;
        case 2:
            color = 'error';
            title = 'Rejected';
            break;
        default:
            color = 'primary';
            title = 'None';
    }

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Dot color={color} />
            <Typography>{title}</Typography>
        </Stack>
    );
};

OrderStatus.propTypes = {
    status: PropTypes.number
};

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
    const [order] = useState('asc');
    const [orderBy] = useState('trackingNo');
    const [selected] = useState([]);
    const [isDataReceived , setisDataReceived] = useState(false);

    const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;
    const [TxData , setTxData] = useState([]);

    useEffect(()=>{

        async function fetchData(){
           
            const transData = await TransactionData();

            const data = await formatReceivedData(transData);
           
            await setTxData(data);

            await setisDataReceived(true);
        }
        fetchData();

    },[])

    return (
        <Box>
            <TableContainer
                sx={{
                    width: '100%',
                    overflowX: 'auto',
                    position: 'relative',
                    display: 'block',
                    maxWidth: '100%',
                    '& td, & th': { whiteSpace: 'nowrap' }
                }}
            >
                
                <Audio
                    radius = "15"
                    color = 'green'
                    ariaLabel = 'three-dots-loading'     
                    wrapperStyle={{}}
                     wrapperClass="react-spinner"
                    visible = {!isDataReceived}
                    />

                <Table
                    aria-labelledby="tableTitle"
                    sx={{
                        '& .MuiTableCell-root:first-child': {
                            pl: 2
                        },
                        '& .MuiTableCell-root:last-child': {
                            pr: 3
                        }
                    }}
                    style ={isDataReceived ?  {display:"block"} : {display:"hidden"} }
                >
                    <OrderTableHead order={order}
                     orderBy={orderBy} 
                     />

                    <TableBody>
                        {stableSort(TxData, getComparator(order, orderBy)).map((row, index) => {
                            const isItemSelected = isSelected(row.trackingNo);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.trackingNo}
                                    selected={isItemSelected}
                                >
                                    <TableCell component="th" id={labelId} scope="row" align="left">
                                        <Link color="secondary" component={RouterLink} to="">
                                            {row.trackingNo}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left">{row.date}</TableCell>
                                    <TableCell align="left">{row.time}</TableCell>

                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="left">
                                        <OrderStatus status={row.carbs} />
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.protein}
                                        {/* <NumberFormat value={row.protein} displayType="text" thousandSeparator prefix="$" /> */}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            
            
            </TableContainer>
        </Box>
    );
}
