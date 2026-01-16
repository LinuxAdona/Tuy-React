import "../../assets/css/index.css";
import Navbar from "../../components/Navbar.tsx";

const CitizensCharter = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="relative w-full h-64 bg-cover bg-center bg-[url('hero-image.jpg')] bg-black/40 bg-blend-overlay">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-2xl">Citizens Charter</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Citizens Charter</h2>
          <p className="text-gray-600 text-lg">
            Content coming soon. This page will feature the citizens charter information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CitizensCharter;
