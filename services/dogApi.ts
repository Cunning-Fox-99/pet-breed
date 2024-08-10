
import axios from 'axios';

const DOG_API_URL = 'https://api.thedogapi.com/v1';

export const fetchRandomDogBreeds = async () => {
    const response = await axios.get(`${DOG_API_URL}/breeds`);
    return response.data;
};
