
import axios from 'axios';

export interface Breed {
    id: number;
    name: string;
    image?: {
        url: string;
    };
    temperament?: string;
}

const CAT_API_URL = 'https://api.thecatapi.com/v1';

export const fetchRandomCatBreeds = async (): Promise<Breed[]> => {
    const response = await axios.get(`${CAT_API_URL}/breeds`);
    return response.data;
};