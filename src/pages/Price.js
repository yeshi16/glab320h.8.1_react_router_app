import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function Price (props){
    const apiKey = '169A21DB-4A35-49BB-BB24-5749668C1167'

    // Grabbing the currency symbol from the URL Params
    const {symbol} = useParams()
    
    // Using the other two variables to create our URL.
    const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    // State to hold the coin data.
    const [coin, setCoin] = useState(null);

    // Function to fetch coin data.
    const getCoin = async () => {
        try{
            
           const response = await fetch(url);
           const data = await response.json();
           setCoin(data);
            
        }catch(e){
            console.log('fetch error')
        }
    }

    // useEffect to run getCoin when component mounts.
    useEffect(() => {
        getCoin()
    }, [])

    // loaded function for when data is fetched.
    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        )
    }

    // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };
    
   // If coin has data, run the loaded function; otherwise, run loading.
   return coin && coin.rate ? loaded() : loading();
}

export default Price