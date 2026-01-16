import "../assets/css/index.css";
import Navbar from "../components/Navbar.tsx";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="relative w-full h-64 bg-cover bg-center bg-[url('hero-image.jpg')] bg-black/40 bg-blend-overlay">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-2xl">Contact Us</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg mb-6">
            For inquiries, concerns, or feedback, please feel free to reach out to the Municipal Government of Tuy, Batangas.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-primary">Address</h3>
              <p className="text-gray-600">Municipal Hall, Tuy, Batangas</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">Contact Numbers</h3>
              <p className="text-gray-600">Phone: (043) XXX-XXXX</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">Email</h3>
              <p className="text-gray-600">info@tuy.gov.ph</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
