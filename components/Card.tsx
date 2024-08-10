import Link from 'next/link';
import React from "react";

export interface Breed {
    id: number;
    name: string;
    image?: {
        url: string;
    };
    temperament?: string;
}

interface CardProps {
    breed: Breed;
}

const Card: React.FC<CardProps> = ({ breed }) => {
    return (
        <Link href={`/breed/${breed.id}`} className="block p-4 border rounded-lg shadow-md">
            <img src={breed.image?.url} alt={breed.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="mt-2 text-xl font-semibold">{breed.name}</h2>
        </Link>
    );
};

export default Card;
