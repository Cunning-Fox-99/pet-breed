
import axios from 'axios';

const DOG_API_URL = 'https://api.thedogapi.com/v1';

export interface Breed {
    id: number;
    name: string;
    image?: {
        url: string;
    };
    temperament?: string;
}

export const fetchRandomDogBreeds = async (): Promise<Breed[]> => {
    const response = await axios.get(`${DOG_API_URL}/breeds`);
    return response.data;
};
