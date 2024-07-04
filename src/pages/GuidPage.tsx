import PlantDiseaseCard from "../components/PlantDiseaseCard.tsx";

export default function GuidPage() {
    const commonDiseases = [
        {
            title: "Early blight (اللفحة المبكرة)",
            description:
                "اللفحة المبكرة هي مرض فطري شائع يصيب الطماطم والنباتات الأخرى في عائلة الباذنجانيات. يحدث هذا المرض بسبب فطر Alternaria solani ويظهر عادةً على شكل بقع صغيرة داكنة على الأوراق السفلية للنباتات.",
            image: "/public/images/Early_blight.jpg",
        },
        {
            title: "Late blight (اللفحة المتأخرة)",
            description:
                "اللفحة المتأخرة هي مرض نباتي مدمر يصيب أفراد عائلة الباذنجانيات، وخاصة الطماطم والبطاطس. وينتج عن مسببات أمراض الفطريات البيضية، وهو نوع من العفن المائي وليس فطرًا حقيقيًا.",
            image: "/public/images/late_blight.jpg",
        }, {
            title: "Target Spot (البقعة المستهدفة)",
            description:
                "هي مرض فطري يصيب مجموعة متنوعة من المحاصيل، بما في ذلك الطماطم والفول السوداني والنباتات الأخرى. يسببه فطر Corynespora cassiicola.",
            image: "/public/images/target_spot.jpg",
        },
        {
            title: "Septoria leaf spot",
            description:
                "هو مرض شائع ومدمر يصيب نباتات الطماطم وأحياناً محاصيل أخرى من الفصيلة الباذنجانية تظهر بقع دائرية صغيرة ذات مراكز داكنة وهوامش فاتحة بشكل أساسي على الأوراق السفلية.",
            image: "/public/images/Septoria_leaf_spot.jpg",
        }, {
            title: "Northern Leaf Blight",
            description:
                "هو مرض ورقي كبير يصيب نباتات الذرة يظهر مرض لفحة الأوراق الشمالية في البداية على شكل آفات صغيرة بيضاوية الشكل على أوراق الذرة، والتي تكون في البداية بنية أو أسمر اللون ومحاطة بهالات صفراء.",
            image: "/public/images/Northern_Leaf_Blight.jpg",
        },
        {
            title: "Grape Black rot",
            description:
                "العفن الأسود هو مرض فطري مدمر يصيب العنب خاصة في المناطق ذات المناخ الدافئ والرطب. ويسببه فطر غينارديا بيدويلي",
            image: "/public/images/download.jpg",
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