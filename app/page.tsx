// app/page.tsx
import { fetchRandomDogBreeds } from '@/services/dogApi';
import { fetchRandomCatBreeds } from '@/services/catApi';
import Card from '../components/Card';

export default async function Home() {
  const dogBreeds = await fetchRandomDogBreeds();
  const catBreeds = await fetchRandomCatBreeds();


  return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center">Pet Breed Explorer</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dogBreeds.map((breed) => (
              <Card key={breed.id} breed={breed} />
          ))}
          {catBreeds.map((breed) => (
              <Card key={breed.id} breed={breed} />
          ))}
        </div>
      </div>
  );
}
