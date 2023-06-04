import axios from 'axios';


 const weaderApi=async (ciudad: string) => {
    let keyAPI = `668bd97b0f0c6d17c37365376afdc7ef`;
    let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},colombia&appid=${keyAPI}`;

    const data = await axios.get(urlAPI)

    return JSON.parse(JSON.stringify(data.data))
}

export const getWeather =  async(city: string) => {
    const data = await weaderApi(city)as any
    return data
  }