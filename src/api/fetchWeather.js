import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: "bd5e378503939ddaee76f12ad7a97608",
        }
    });
    return data;
};