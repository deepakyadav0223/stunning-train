import moment from "moment";

function createData(trackingNo, name, date, time, fat, carbs, protein) {
    return { trackingNo, name,date,  time, fat, carbs, protein };
}

function convertToDate(milliseconds){
    return moment(milliseconds).format('YYYY/MM/DD');
}

function convertToTime(milliseconds){
    return moment(milliseconds).format('LT');
}

const formatData = (data) =>{
    let formatedData = []
    
    data.forEach(element => {

       formatedData.push(createData(parseInt(element.tranactionId), element.className , convertToDate(element.createdAt) , convertToTime(element.createdAt),
        element.purpose , element.status ? 1 : 2 , "Dr.  " + element.bookedName));
    
    });
    // alert(formatedData.length);
    return formatedData;


}

export default formatData;


