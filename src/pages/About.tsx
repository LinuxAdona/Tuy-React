import "../assets/css/index.css";
import Navbar from "../components/Navbar.tsx";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-96 bg-cover bg-center bg-[url('hero-image.jpg')] bg-black/40 bg-blend-overlay">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white drop-shadow-2xl mb-4">About Tuy</h1>
          <p className="text-2xl text-white drop-shadow-lg">The Pearl of Balayan Bay</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12 space-y-16">
        
        {/* Brief History Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">Brief History</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              The Municipality of Tuy is a first-class municipality in the province of Batangas, Philippines. 
              Rich in history and culture, Tuy has been an integral part of the region's development since the Spanish colonial period.
            </p>
            <p>
              The name "Tuy" is believed to have originated from the Tagalog word "tuytoy," referring to a 
              type of tree that was abundant in the area during the early days of settlement. The town was 
              officially established during the Spanish era and has grown into a vibrant community along the shores of Balayan Bay.
            </p>
            <p>
              Throughout its history, Tuy has been known for its agricultural productivity, fishing industry, 
              and the warm hospitality of its people. The municipality has preserved its rich cultural heritage 
              while embracing modern development and progress.
            </p>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">Vision and Mission</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary to-primary-hover p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <i className="fas fa-eye mr-3"></i>
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed">
                A progressive, peaceful, and God-loving municipality with improved quality of life for all Tuyeños, 
                characterized by sustainable economic development, efficient governance, and environmental stewardship.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-primary-hover p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <i className="fas fa-bullseye mr-3"></i>
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed">
                To provide responsive, transparent, and participatory local governance that delivers quality services, 
                promotes inclusive growth, protects the environment, and empowers every citizen to achieve their fullest potential.
              </p>
            </div>
          </div>
        </section>

        {/* Geographic Information Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">Geographic Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold text-primary mb-2">Location</h3>
                <p className="text-gray-700">
                  Tuy is strategically located in the southwestern part of Batangas province, bounded by 
                  Balayan Bay to the west, providing access to rich marine resources and scenic coastal views.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold text-primary mb-2">Land Area</h3>
                <p className="text-gray-700">
                  The municipality covers an approximate land area of 74.13 square kilometers, comprising 
                  both coastal and inland barangays with diverse topographical features.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold text-primary mb-2">Climate</h3>
                <p className="text-gray-700">
                  Tuy experiences a tropical climate with two distinct seasons: the dry season from November 
                  to April and the wet season from May to October. The temperature typically ranges from 23°C to 32°C throughout the year.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold text-primary mb-2">Topography</h3>
                <p className="text-gray-700">
                  The terrain varies from coastal plains ideal for settlement and agriculture to gently rolling 
                  hills in the interior areas. The municipality's topography supports various agricultural activities and settlements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Barangays Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">Barangays</h2>
          </div>
          <p className="text-gray-700 text-lg mb-6">
            The Municipality of Tuy is politically subdivided into 22 barangays, each with its unique character and contribution to the community:
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Acle", "Bayudbud", "Bolboc", "Dalima", "Dao", "Guinhawa",
              "Lumbangan", "Luntal", "Magahis", "Mataywanac", "Malibu Este", 
              "Malibu Oeste", "Oitawen", "Palincaro", "Putol", "Rillo", 
              "Sabang", "San Jose", "San Pablo", "Santa Clara", "Talon", "Toong"
            ].map((barangay, index) => (
              <div 
                key={index}
                className="bg-gray-50 border-l-4 border-primary p-4 hover:bg-gray-100 transition-colors"
              >
                <p className="text-gray-800 font-semibold">{barangay}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Heritage Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">Cultural Heritage</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Fiestas and Celebrations</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                The people of Tuy celebrate various fiestas throughout the year, with each barangay honoring 
                its patron saint with vibrant festivities, processions, and community gatherings. These celebrations 
                showcase the deep faith and strong sense of community that define the Tuyeño spirit.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Traditional Practices</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Tuy has preserved many traditional practices passed down through generations, including 
                local crafts, fishing techniques, and agricultural methods. The municipality takes pride in 
                maintaining these cultural traditions while adapting to modern times.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Local Cuisine</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                The local cuisine reflects the municipality's coastal location and agricultural abundance. 
                Fresh seafood, locally-grown vegetables, and traditional Filipino dishes are staples of 
                Tuyeño dining, offering visitors an authentic taste of Batangas culture.
              </p>
            </div>
          </div>
        </section>

        {/* Tourist Attractions Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">Tourist Attractions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">
                <i className="fas fa-water mr-2"></i>
                Coastal Areas and Beaches
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tuy's coastline along Balayan Bay offers beautiful beaches and scenic views. The calm waters 
                are perfect for swimming, fishing, and various water activities, making it a favorite 
                destination for both locals and tourists.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">
                <i className="fas fa-church mr-2"></i>
                Historical Churches
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The municipality is home to several historical churches that showcase Spanish colonial 
                architecture and serve as testaments to the area's rich religious heritage and history.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">
                <i className="fas fa-tree mr-2"></i>
                Natural Attractions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                From lush green hills to pristine coastal areas, Tuy offers diverse natural attractions 
                for nature lovers and adventure seekers. The municipality's natural beauty provides 
                opportunities for eco-tourism and outdoor recreation.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">
                <i className="fas fa-fish mr-2"></i>
                Local Markets and Fishing Villages
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Experience authentic local life by visiting Tuy's vibrant markets and traditional fishing 
                villages. Witness the daily catch, interact with friendly locals, and immerse yourself 
                in the community's maritime culture.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
