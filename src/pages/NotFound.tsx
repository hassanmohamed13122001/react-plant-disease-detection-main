import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
                <div className="max-w-md text-center">
                    <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                    <p className="text-xl text-gray-600 mb-8">Oops! Page not found.</p>
                    <Link to="/" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Go Home</Link>
                </div>
            </div>
        </>
    )
}