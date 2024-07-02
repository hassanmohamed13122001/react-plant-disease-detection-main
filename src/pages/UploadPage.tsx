import axios from "axios";
import { ChangeEvent , useState } from "react";

export default function UploadPage() {
  
  const [selectedFile, setSelectedFile] = useState<{
    img: string;
    file: Blob;
  }>();
  const [loading, setLoading] = useState(false);
  interface DiseaseInfo {
    arabic_name: string;
    symptoms: string[];
    pathogen: string;
    disease: string;
    plant: string;
    favorable_conditions: string[];
    control_methods: string[];
  }
  const [result, setResult] = useState<{
    plant: string;
    disease_info: DiseaseInfo;
    confidence: number;
    predicted_class:string;
  } | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile({
        img: URL.createObjectURL(event.target.files[0]),
        file: event.target.files[0]
      });
    }
  };
  const thisCategory = localStorage.getItem('category');
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile.file);
    const category = localStorage.getItem('category')
    try {
      const response = await axios.post(
        `https://ahmedsaber-lite-model.hf.space/predict/${category}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      console.log(response.data);
      
      setResult(response.data);
      localStorage.removeItem('category');
    } catch (error) {
      console.error("Error uploading file:", error);
    }

    setLoading(false);
  };

  return (
    <div className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Plant Disease Detection for <span style={{color:'#22C55E'}} > {thisCategory?thisCategory:''}</span></h2>
      <form>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4"
        />
        <div className="w-full flex justify-center my-5">
          <img src={selectedFile?.img} className="w-1/6 rounded-full" alt="" />
        </div>
        <button
          onClick={handleUpload}
          disabled={loading}
          className="my-4 bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-400 hover:text-white transition duration-300 ease-in-out"
        >
          {loading ? "Detecting..." : "Detect Disease"}
        </button>
      </form>
      {result && (
        <div style={{boxShadow:'0px 0px 15px rgba(0, 0, 0,0.5)' , backgroundColor:'rgba(34, 197, 94 , 0.4)' , width:'90%' , margin:'auto' , borderRadius:'18px' , padding:'18px'}}>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Information About Disease</h3>
          {/* <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p> */}
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Plant</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{result.plant}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Disease_Name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{result.disease_info.arabic_name}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Pathogen</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{result.disease_info.pathogen}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Confidencen</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{result.confidence}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Favorable_conditions</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
               {result.disease_info.favorable_conditions.length?result.disease_info.favorable_conditions.map((condition, index) => <span key={index}>
                <p className="mb-4">{index+1}- {condition}</p>
               </span>):<p>none</p>}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Control_methods</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
               {result.disease_info.control_methods.length?result.disease_info.control_methods.map((method, index) => <span key={index}>
                <p className="mb-4">{index+1}- {method}</p>
               </span>):<p>none</p>}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Symptoms</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
               {result.disease_info.symptoms.length?result.disease_info.symptoms.map((symptom, index) => <span key={index}>
                <p className="mb-4">{index+1}- {symptom}</p>||<p>no</p>
               </span>):<p>none</p>}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      )}
    </div>
  );
}
