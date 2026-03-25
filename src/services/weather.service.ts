import axios from "axios";

export const getLocation = async() => {
    try{
        const response = await 
            axios.get('http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}');
        console.log(response);
    } catch(error) {
        console.log(error)
    };
};