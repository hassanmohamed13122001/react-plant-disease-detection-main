import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="header text-white h-[90vh]">
                <div className="container mx-auto text-center py-20">
                    <h1 className="text-4xl font-bold mb-4">Plant Disease Detection</h1>
                    <p className="text-lg mb-8">Detect plant diseases quickly and accurately with our advanced AI technology.</p>
                    <Link to="/upload-image" className="bg-white text-green-500 font-semibold py-2 px-6 rounded-full hover:bg-green-400 hover:text-white transition duration-300 ease-in-out">
                        Get Started
                    </Link>
                </div>
            </div>
        </>
    )
}