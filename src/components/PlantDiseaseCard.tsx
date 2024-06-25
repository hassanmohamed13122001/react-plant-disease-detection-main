import DiseaseProps from "../interfaces/DiseaseProps.tsx";

export default function PlantDiseaseCard({ title, description, image }:DiseaseProps) {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg mx-4 my-4 border border-black rounded">
            <img className="w-full" src={image} alt={title}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    )
}