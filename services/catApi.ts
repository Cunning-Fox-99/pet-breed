
import axios from 'axios';

const CAT_API_URL = 'https://api.thecatapi.com/v1';

export const fetchRandomCatBreeds = async () => {
    const response = await axios.get(`${CAT_API_URL}/breeds`);
    return response.data;
};
