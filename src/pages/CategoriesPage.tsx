import { Link } from 'react-router-dom';
import corn from '../assets/corn.jpg';
import grape from '../assets/grape.jpg';
import pepper from '../assets/pepper.jpg';
import poteto from '../assets/poteto.jpg';
import tometo from '../assets/tometo.jpg';

interface Category {
    id: number;
    name: string;
    image: string; 
}
export default function CategoriesPage() {

    const categoriesData: Category[]= [
        {
            id: 1,
            name: "corn",
            image: corn
        },
        {
            id: 2,
            name: "grape",
            image: grape
        },
        {
            id: 3,
            name: "pepper",
            image: pepper
        },
        {
            id: 4,
            name: "potato",
            image: poteto
        },
        {
            id: 5,
            name: "tomato",
            image: tometo
        }
    ]; 

    const storeCategory = (itemName:string) => {
        localStorage.setItem('category', itemName);
    }
  return <>
    <h2 className="text-center text-3xl font-bold mt-5">Categories</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-8">
      {categoriesData.map((item) => <div key={item.id} onClick={() => {storeCategory(item.name)}} className="bg-white p-6 rounded shadow">
        <Link to={'/upload-image'}>
          <div>
            <img src={item.image} loading='lazy' alt={item.name} className='w-100' style={{height:'250px' , objectFit:'cover'}} />
            <h3 className="text-lg font-bold mt-4">{item.name}</h3>
          </div>
        </Link>
      </div>)}
      
    </div>
  </>
}
