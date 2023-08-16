import Cookies from 'js-cookie';

const TransactionData = async()=>{

    const Url = process.env.REACT_APP_BASE_API_URL + "/transactions";

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

export default TransactionData;

