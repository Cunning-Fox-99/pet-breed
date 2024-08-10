import Link from 'next/link';

const Card = ({ breed:any }) => {

    return (
        <Link href={`/breed/${breed.id}`}>
            <div className="border p-4 rounded-lg hover:shadow-lg transition">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={breed.image?.url} alt={breed.name} className="w-full h-48 object-cover rounded-md" />
                <h2 className="text-xl font-semibold mt-2">{breed.name}</h2>
            </div>
        </Link>
    );
};

export default Card;
