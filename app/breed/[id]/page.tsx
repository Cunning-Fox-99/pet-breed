import { fetchRandomDogBreeds, Breed as DogBreed } from '../../../services/dogApi';
import { fetchRandomCatBreeds, Breed as CatBreed } from '../../../services/catApi';

export default async function BreedPage({ params }: { params: { id: string } }) {
    const { id } = params;

    const dogBreeds: DogBreed[] = await fetchRandomDogBreeds();
    const catBreeds: CatBreed[] = await fetchRandomCatBreeds();

    const breedId = Number(id);
    // Объединяем массивы пород собак и кошек
    const allBreeds: (DogBreed | CatBreed)[] = [...dogBreeds, ...catBreeds];

    // Поиск породы по ID
    let breed = allBreeds.find((breed:any) => breed.id === breedId);

    if (!breed) {
        return <div>Порода не найдена</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center">{breed.name}</h1>
            <img src={breed.image?.url} alt={breed.name} className="w-full h-96 object-cover rounded-md" />
            <p className="mt-4">{breed.temperament || 'Описание отсутствует.'}</p>
        </div>
    );
}
