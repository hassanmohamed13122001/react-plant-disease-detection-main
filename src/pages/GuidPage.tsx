import PlantDiseaseCard from "../components/PlantDiseaseCard.tsx";

export default function GuidPage() {
    const commonDiseases = [
        {
            title: "Powdery Mildew",
            description:
                "Powdery mildew is a fungal disease that affects a wide range of plants. It appears as a white powdery substance on the leaves and stems of plants.",
            image: "path/to/powdery_mildew.jpg",
        },
        {
            title: "Leaf Spot",
            description:
                "Leaf spot is a common fungal disease characterized by dark spots on the leaves of plants. It can lead to defoliation and weaken the plant.",
            image: "/images/Leaf_Spot.jpg",
        }, {
            title: "Powdery Mildew",
            description:
                "Powdery mildew is a fungal disease that affects a wide range of plants. It appears as a white powdery substance on the leaves and stems of plants.",
            image: "path/to/powdery_mildew.jpg",
        },
        {
            title: "Leaf Spot",
            description:
                "Leaf spot is a common fungal disease characterized by dark spots on the leaves of plants. It can lead to defoliation and weaken the plant.",
            image: "path/to/leaf_spot.jpg",
        }, {
            title: "Powdery Mildew",
            description:
                "Powdery mildew is a fungal disease that affects a wide range of plants. It appears as a white powdery substance on the leaves and stems of plants.",
            image: "path/to/powdery_mildew.jpg",
        },
        {
            title: "Leaf Spot",
            description:
                "Leaf spot is a common fungal disease characterized by dark spots on the leaves of plants. It can lead to defoliation and weaken the plant.",
            image: "path/to/leaf_spot.jpg",
        },
        // Add more diseases as needed
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-8">Common Plant Diseases</h1>
            <div className="flex flex-wrap justify-center">
                {commonDiseases.map((disease, index) => (
                    <PlantDiseaseCard key={index} {...disease} />
                ))}
            </div>
        </div>
    );
}