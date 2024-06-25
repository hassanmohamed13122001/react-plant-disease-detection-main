import axios from "axios";
import { ChangeEvent, useState } from "react";

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<{
    img: string;
    file: Blob;
  }>();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    plant: string;
    disease: string;
    confidence: string;
  } | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile({
        img: URL.createObjectURL(event.target.files[0]),
        file: event.target.files[0]
      });
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile.file);

    try {
      const response = await axios.post(
        "https://ahmedmsaber.pythonanywhere.com/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }

    setLoading(false);
  };

  return (
    <div className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Plant Disease Detection</h2>
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
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Detection Result:</h3>
          <p className="text-gray-700">
            <span className="text-xl capitalize">plant</span>:{result.plant}
          </p>
          <p className="text-gray-700">
            <span className="text-xl capitalize">disease</span>:{result.disease}
          </p>
          <p className="text-gray-700">
            <span className="text-xl capitalize">confidence</span>:
            {result.confidence}
          </p>
        </div>
      )}
    </div>
  );
}
