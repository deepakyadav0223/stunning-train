//query can be /classes/bookedByDate or /classes/bookedByMonth
// or  /users/totalUsers  or /txlength or /bugsLength
//  or /classes/bookedByWeekLength

export const fetchData = async(query)=>{
    const Url = process.env.REACT_APP_BASE_API_URL + query;

   const res =  await fetch(Url , {
        method:"GET",
        mode:'cors',
        headers: new Headers({
            'Authorization' : `Bearer ${Cookies.get("jwtToken")}`,
            'Content-Type': 'application/json',
        })
    });
    const response = await res.json();
     return response.data;

}


export const returnMonthFormat = ()=>{

    
        const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const todaydate = new Date().getMonth() + 1;

        let requiredArray = [];

        for(let i = todaydate ; i < todaydate + 12 ; i++){
                requiredArray.push(monthArray[(i+12)%12]);
        }

        console.log(requiredArray);

        return requiredArray;

}


export const returnWeekFormat = ()=>{
    const weekArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        const todaydate = new Date().getDay();
        console.log(todaydate);

        let requiredArray = [];

        for(let i = todaydate ; i < todaydate + 7 ; i++){
        requiredArray.push(weekArray[(i+7)%7]);
        }

        return requiredArray;
}

