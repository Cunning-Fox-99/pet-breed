import { fetchRandomDogBreeds } from '@/services/dogApi';
import { fetchRandomCatBreeds } from '@/services/catApi';

export default async function BreedPage({ params }: { params: { id: string } }) {
    const { id } = params;

    // Поиск породы сначала среди собак, потом среди кошек
    const dogBreeds = await fetchRandomDogBreeds();
    const catBreeds = await fetchRandomCatBreeds();
    console.log(dogBreeds)

    console.log(+id)

    let breed = dogBreeds.find((breed) => breed.id === +id) || catBreeds.find((breed) => breed.id === +id);

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
