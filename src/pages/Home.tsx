import "../assets/css/index.css";
import Navbar from "../components/Navbar.tsx";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useParallax } from "../hooks/useParallax";

function Home() {
  // Parallax effect for hero section
  const { offset } = useParallax({ speed: 0.3 });

  // Scroll animation refs for each section
  const quickAccessRef = useScrollAnimation();
  const mayorRef = useScrollAnimation();
  const factsRef = useScrollAnimation();
  const announcementsRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const exploreRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section - Balanced Modern Professional */}
      <section className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
        {/* Parallax Background Image */}
        <div
          className="parallax-bg bg-[url('/hero-image.jpg')]"
          style={{
            transform: `translateY(${offset}px)`,
          }}
        ></div>

        {/* Enhanced Multi-layer Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50"></div>

        {/* Breadcrumb Navigation */}
        <div
          className="absolute top-4 left-48 z-20 animate-fadeIn hidden md:block"
          style={{ animationDelay: "0.2s" }}
        >
          <nav className="text-sm text-white/70 flex items-center">
            <span className="hover:text-white/90 transition-colors cursor-pointer">
              Home
            </span>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <span className="text-white/90">Municipality of Tuy, Batangas</span>
          </nav>
        </div>

        {/* Main Content - Center */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-6 tracking-tight animate-fadeInUp">
            Municipality of Tuy, Batangas
          </h1>
          <div
            className="w-1/3 h-1 bg-yellow-400 mb-6 rounded-full animate-scaleIn"
            style={{ animationDelay: "0.3s" }}
          ></div>
          <p
            className="text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-lg mb-6 italic font-light animate-fadeInUp"
            style={{ animationDelay: "0.5s" }}
          >
            Home of the Kambingan Festival
          </p>
          <p
            className="text-lg md:text-xl text-white/90 drop-shadow-lg font-light max-w-2xl animate-fadeIn"
            style={{ animationDelay: "0.7s" }}
          >
            Your Gateway to Quality Local Governance
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
          <i className="fas fa-chevron-down text-white/70 text-xl"></i>
        </div>
      </section>

      {/* Quick Access Cards Section */}
      <section
        ref={quickAccessRef.elementRef as React.RefObject<HTMLElement>}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div
            className={`text-center mb-12 scroll-animate ${quickAccessRef.isVisible ? "visible" : ""}`}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Quick Access
            </h2>
            <p className="text-gray-600 text-lg">
              Find what you need quickly and easily
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Downloadable Forms */}
            <Link
              to="/downloadables/forms"
              className={`group bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-primary hover:shadow-xl transition-all duration-300 scroll-animate-scale stagger-1 ${quickAccessRef.isVisible ? "visible" : ""}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <i className="fas fa-file-alt text-3xl text-primary group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                Downloadable Forms
              </h3>
              <p className="text-gray-600">
                Access forms for municipal services
              </p>
            </Link>

            {/* Announcements */}
            <a
              href="#announcements"
              className={`group bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-primary hover:shadow-xl transition-all duration-300 scroll-animate-scale stagger-2 ${quickAccessRef.isVisible ? "visible" : ""}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <i className="fas fa-bullhorn text-3xl text-primary group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                Announcements
              </h3>
              <p className="text-gray-600">Latest news and updates</p>
            </a>

            {/* Contact Us */}
            <Link
              to="/contact"
              className={`group bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-primary hover:shadow-xl transition-all duration-300 scroll-animate-scale stagger-3 ${quickAccessRef.isVisible ? "visible" : ""}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <i className="fas fa-phone text-3xl text-primary group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                Contact Us
              </h3>
              <p className="text-gray-600">
                Get in touch with municipal offices
              </p>
            </Link>

            {/* Transparency */}
            <Link
              to="/transparencies/financial-statements"
              className={`group bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-primary hover:shadow-xl transition-all duration-300 scroll-animate-scale stagger-4 ${quickAccessRef.isVisible ? "visible" : ""}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <i className="fas fa-chart-line text-3xl text-primary group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                Transparency
              </h3>
              <p className="text-gray-600">
                View financial reports and documents
              </p>
            </Link>

            {/* Local Officials */}
            <Link
              to="/government/officials"
              className={`group bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-primary hover:shadow-xl transition-all duration-300 scroll-animate-scale stagger-5 ${quickAccessRef.isVisible ? "visible" : ""}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <i className="fas fa-users text-3xl text-primary group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                Local Officials
              </h3>
              <p className="text-gray-600">Meet your government officials</p>
            </Link>

            {/* Gallery */}
            <Link
              to="/gallery"
              className={`group bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-primary hover:shadow-xl transition-all duration-300 scroll-animate-scale stagger-6 ${quickAccessRef.isVisible ? "visible" : ""}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <i className="fas fa-images text-3xl text-primary group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                Gallery
              </h3>
              <p className="text-gray-600">Photos of Tuy's beauty and events</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Mayor's Message Section */}
      <section
        ref={mayorRef.elementRef as React.RefObject<HTMLElement>}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div
            className={`bg-white shadow-lg rounded-lg p-8 md:p-12 scroll-animate-left ${mayorRef.isVisible ? "visible" : ""}`}
          >
            <div className="flex items-center mb-12">
              <div className="w-2 h-12 bg-primary mr-4"></div>
              <h2 className="text-4xl font-bold text-primary">
                Message of the Municipal Mayor
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div
                className={`flex flex-col items-center justify-center space-y-4 scroll-animate-scale ${mayorRef.isVisible ? "visible" : ""}`}
              >
                <img
                  className="w-64 h-64 rounded-full shrink-0 object-cover border-4 border-primary/20"
                  src="/mayor-photo.jpg"
                  alt="Municipal Mayor"
                />
                <div className="text-center">
                  <p className="font-bold text-primary">
                    Mayor Jose Jecerell "Jey" C. Cerrado
                  </p>
                  <p className="text-gray-600 italic">Municipal Mayor</p>
                  <p className="text-gray-500 text-sm mt-2">January 2026</p>
                </div>
              </div>
              <div className="flex-1 relative">
                {/* Opening Quotation Mark */}
                <div className="md:block hidden absolute -top-2 -left-2 md:-top-4 md:-left-4 text-primary opacity-20">
                  <i className="fas fa-quote-left text-6xl md:text-7xl"></i>
                </div>

                {/* Closing Quotation Mark */}
                <div className="md:block hidden absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 text-primary opacity-20">
                  <i className="fas fa-quote-right text-6xl md:text-7xl"></i>
                </div>

                <div className="md:ps-24 space-y-4 text-lg text-gray-700 leading-relaxed relative z-10">
                  <p>
                    This website serves as your gateway to the programs,
                    services, and accomplishments of our beloved town.
                  </p>
                  <p>
                    It is designed to keep our constituents informed and updated
                    on the latest developments, while also promoting
                    transparency in our local governance.
                  </p>
                  <p>
                    Here, you will also find downloadable forms for quick and
                    convenient transactions—helping us deliver fast, efficient,
                    and accessible public service.
                  </p>
                  <p>
                    I invite you to explore our site and discover more about
                    Tuy—our people, our culture, and the opportunities we have
                    to offer. May your visit be pleasant, informative, and even
                    more than what you expect.
                  </p>
                  <p className="font-semibold text-center md:text-left mt-6">
                    Thank you, and it is always an honor to serve you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts About Tuy */}
      <section
        ref={factsRef.elementRef as React.RefObject<HTMLElement>}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div
            className={`text-center mb-12 scroll-animate ${factsRef.isVisible ? "visible" : ""}`}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">About Tuy</h2>
            <p className="text-gray-600 text-lg">
              Quick facts about our municipality
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {/* Land Area */}
            <div
              className={`bg-gradient-to-br from-primary to-primary-hover p-6 rounded-lg text-white text-center scroll-animate-scale stagger-1 ${factsRef.isVisible ? "visible" : ""}`}
            >
              <i className="fas fa-map-marked-alt text-4xl mb-4"></i>
              <h3 className="text-3xl font-bold mb-2">74.13</h3>
              <p className="text-white/90">Square Kilometers</p>
            </div>

            {/* Barangays */}
            <div
              className={`bg-gradient-to-br from-primary to-primary-hover p-6 rounded-lg text-white text-center scroll-animate-scale stagger-2 ${factsRef.isVisible ? "visible" : ""}`}
            >
              <i className="fas fa-map-marker-alt text-4xl mb-4"></i>
              <h3 className="text-3xl font-bold mb-2">22</h3>
              <p className="text-white/90">Barangays</p>
            </div>

            {/* Classification */}
            <div
              className={`bg-gradient-to-br from-primary to-primary-hover p-6 rounded-lg text-white text-center scroll-animate-scale stagger-3 ${factsRef.isVisible ? "visible" : ""}`}
            >
              <i className="fas fa-star text-4xl mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">1st Class</h3>
              <p className="text-white/90">Municipality</p>
            </div>

            {/* Location */}
            <div
              className={`bg-gradient-to-br from-primary to-primary-hover p-6 rounded-lg text-white text-center scroll-animate-scale stagger-4 ${factsRef.isVisible ? "visible" : ""}`}
            >
              <i className="fas fa-location-arrow text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Balayan Bay</h3>
              <p className="text-white/90">Batangas</p>
            </div>
          </div>

          <div
            className={`text-center scroll-animate stagger-5 ${factsRef.isVisible ? "visible" : ""}`}
          >
            <Link
              to="/about"
              className="inline-block bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:border-primary hover:text-white hover:bg-primary transition-all shadow-sm hover:shadow-lg"
            >
              <i className="fa-solid fa-circle-info me-2"></i>Learn More About
              Tuy
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Announcements Section */}
      <section
        ref={announcementsRef.elementRef as React.RefObject<HTMLElement>}
        id="announcements"
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div
            className={`flex items-center mb-12 scroll-animate-left ${announcementsRef.isVisible ? "visible" : ""}`}
          >
            <div className="w-2 h-20 bg-primary mr-4"></div>
            <div>
              <h2 className="text-4xl font-bold text-primary">
                Latest Announcements
              </h2>
              <p className="text-gray-600 mt-2">
                Stay updated with the latest news and events
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Announcement 1 */}
            <div
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow scroll-animate-scale stagger-1 ${announcementsRef.isVisible ? "visible" : ""}`}
            >
              <div className="bg-primary p-4">
                <div className="flex items-center text-white">
                  <i className="fas fa-calendar-alt mr-3 text-xl"></i>
                  <span className="font-semibold">January 20, 2026</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Public Consultation for 2026 Annual Investment Plan
                </h3>
                <p className="text-gray-600 mb-4">
                  The Municipality invites all stakeholders to participate in
                  the consultation meeting for the 2026 Annual Investment Plan.
                  Your input is valuable in shaping our community's future
                  development.
                </p>
                <a
                  href="#"
                  className="text-primary font-semibold hover:text-primary-hover inline-flex items-center"
                >
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Announcement 2 */}
            <div
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow scroll-animate-scale stagger-2 ${announcementsRef.isVisible ? "visible" : ""}`}
            >
              <div className="bg-primary p-4">
                <div className="flex items-center text-white">
                  <i className="fas fa-calendar-alt mr-3 text-xl"></i>
                  <span className="font-semibold">January 15, 2026</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  New Business Permit Application Process Now Available Online
                </h3>
                <p className="text-gray-600 mb-4">
                  Starting this month, business owners can now apply for permits
                  through our streamlined online portal. Enjoy faster processing
                  and convenient access to all business-related services.
                </p>
                <a
                  href="#"
                  className="text-primary font-semibold hover:text-primary-hover inline-flex items-center"
                >
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Announcement 3 */}
            <div
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow scroll-animate-scale stagger-3 ${announcementsRef.isVisible ? "visible" : ""}`}
            >
              <div className="bg-primary p-4">
                <div className="flex items-center text-white">
                  <i className="fas fa-calendar-alt mr-3 text-xl"></i>
                  <span className="font-semibold">January 10, 2026</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Community Health and Wellness Program Schedule
                </h3>
                <p className="text-gray-600 mb-4">
                  Free health screening and wellness activities will be
                  conducted in all barangays throughout February. Don't miss
                  this opportunity to prioritize your health with our healthcare
                  team.
                </p>
                <a
                  href="#"
                  className="text-primary font-semibold hover:text-primary-hover inline-flex items-center"
                >
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className={`text-center mt-12 scroll-animate stagger-4 ${announcementsRef.isVisible ? "visible" : ""}`}
          >
            <a
              href="#"
              className="inline-block bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm hover:shadow-lg"
            >
              View All Announcements
            </a>
          </div>
        </div>
      </section>

      {/* Municipal Services Section */}
      <section
        ref={servicesRef.elementRef as React.RefObject<HTMLElement>}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div
            className={`text-center mb-12 scroll-animate ${servicesRef.isVisible ? "visible" : ""}`}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Municipal Services
            </h2>
            <p className="text-gray-600 text-lg">
              Programs and services available to our residents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Health Services */}
            <div
              className={`cursor-pointer bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-primary hover:shadow-xl transition-all scroll-animate-scale stagger-1 ${servicesRef.isVisible ? "visible" : ""}`}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clinic-medical text-4xl text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Health Services
              </h3>
              <p className="text-gray-600">
                Healthcare programs and medical facilities for all residents
              </p>
            </div>

            {/* Education */}
            <div
              className={`cursor-pointer bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-primary hover:shadow-xl transition-all scroll-animate-scale stagger-2 ${servicesRef.isVisible ? "visible" : ""}`}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-graduation-cap text-4xl text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Education
              </h3>
              <p className="text-gray-600">
                School programs, scholarships, and learning initiatives
              </p>
            </div>

            {/* Business & Permits */}
            <div
              className={`cursor-pointer bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-primary hover:shadow-xl transition-all scroll-animate-scale stagger-3 ${servicesRef.isVisible ? "visible" : ""}`}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-briefcase text-4xl text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Business & Permits
              </h3>
              <p className="text-gray-600">
                Business registration, permits, and licenses
              </p>
            </div>

            {/* Social Welfare */}
            <div
              className={`cursor-pointer bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-primary hover:shadow-xl transition-all scroll-animate-scale stagger-4 ${servicesRef.isVisible ? "visible" : ""}`}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hands-helping text-4xl text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Social Welfare
              </h3>
              <p className="text-gray-600">
                Assistance programs and support for residents in need
              </p>
            </div>

            {/* Infrastructure */}
            <div
              className={`cursor-pointer bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-primary hover:shadow-xl transition-all scroll-animate-scale stagger-5 ${servicesRef.isVisible ? "visible" : ""}`}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-road text-4xl text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Infrastructure
              </h3>
              <p className="text-gray-600">
                Development projects, roads, and public facilities
              </p>
            </div>

            {/* Environment */}
            <div
              className={`cursor-pointer bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-primary hover:shadow-xl transition-all scroll-animate-scale stagger-6 ${servicesRef.isVisible ? "visible" : ""}`}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-leaf text-4xl text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Environment
              </h3>
              <p className="text-gray-600">
                Sustainability initiatives and conservation programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Tuy Section */}
      <section
        ref={exploreRef.elementRef as React.RefObject<HTMLElement>}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div
            className={`flex items-center mb-12 scroll-animate-left ${exploreRef.isVisible ? "visible" : ""}`}
          >
            <div className="w-2 h-20 bg-primary mr-4"></div>
            <div>
              <h2 className="text-4xl font-bold text-primary">Explore Tuy</h2>
              <p className="text-gray-600 mt-2">
                Discover the beauty and heritage of our town
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Gallery Preview */}
            <div
              className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col h-full scroll-animate-left ${exploreRef.isVisible ? "visible" : ""}`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="fas fa-images text-primary mr-3"></i>
                Photo Gallery
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 mb-6 flex-grow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <i className="fas fa-image text-4xl text-primary/40"></i>
                </div>
                <div className="aspect-square bg-gradient-to-br from-primary/15 to-primary/5 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <i className="fas fa-image text-4xl text-primary/40"></i>
                </div>
                <div className="aspect-square bg-gradient-to-br from-primary/25 to-primary/15 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <i className="fas fa-image text-4xl text-primary/40"></i>
                </div>
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <i className="fas fa-image text-4xl text-primary/40"></i>
                </div>
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <i className="fas fa-image text-4xl text-primary/40"></i>
                </div>
                <div className="aspect-square bg-gradient-to-br from-primary/15 to-primary/25 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <i className="fas fa-image text-4xl text-primary/40"></i>
                </div>
              </div>
              <Link
                to="/gallery"
                className="block text-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-all duration-300 hover:shadow-md"
              >
                Explore Our Gallery
              </Link>
            </div>

            {/* Tourist Attractions */}
            <div
              className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col h-full scroll-animate-right ${exploreRef.isVisible ? "visible" : ""}`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="fas fa-map-marked-alt text-primary mr-3"></i>
                Tourist Attractions
              </h3>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="group flex items-start cursor-pointer hover:bg-primary/5 transition-all duration-300 rounded-lg p-3 -mx-3">
                  <i className="fas fa-water text-primary mt-1 mr-3 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                      Coastal Areas
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Beautiful beaches along Balayan Bay
                    </p>
                  </div>
                </li>
                <li className="group flex items-start cursor-pointer hover:bg-primary/5 transition-all duration-300 rounded-lg p-3 -mx-3">
                  <i className="fas fa-church text-primary mt-1 mr-3 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                      Historical Churches
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Spanish colonial era religious sites
                    </p>
                  </div>
                </li>
                <li className="group flex items-start cursor-pointer hover:bg-primary/5 transition-all duration-300 rounded-lg p-3 -mx-3">
                  <i className="fas fa-mountain text-primary mt-1 mr-3 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                      Natural Attractions
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Scenic landscapes and nature spots
                    </p>
                  </div>
                </li>
                <li className="group flex items-start cursor-pointer hover:bg-primary/5 transition-all duration-300 rounded-lg p-3 -mx-3">
                  <i className="fas fa-fish text-primary mt-1 mr-3 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                      Fishing Villages
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Traditional coastal communities
                    </p>
                  </div>
                </li>
              </ul>
              <Link
                to="/about"
                className="block text-center bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-md"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef.elementRef as React.RefObject<HTMLElement>}
        className="py-20 bg-primary text-white"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div
            className={`text-center mb-12 scroll-animate ${contactRef.isVisible ? "visible" : ""}`}
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-white/90 text-lg">We're here to serve you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Address */}
            <div
              className={`text-center scroll-animate-scale stagger-1 ${contactRef.isVisible ? "visible" : ""}`}
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-pin text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-white/90">Municipal Hall, Tuy, Batangas</p>
              <p className="text-white/90">Philippines 4200</p>
            </div>

            {/* Contact */}
            <div
              className={`text-center scroll-animate-scale stagger-2 ${contactRef.isVisible ? "visible" : ""}`}
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-white/90">Phone: (043) XXX-XXXX</p>
              <p className="text-white/90">Email: info@tuy.gov.ph</p>
            </div>

            {/* Office Hours */}
            <div
              className={`text-center scroll-animate-scale stagger-3 ${contactRef.isVisible ? "visible" : ""}`}
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
              <p className="text-white/90">Monday - Friday</p>
              <p className="text-white/90">8:00 AM - 5:00 PM</p>
            </div>
          </div>

          <div
            className={`text-center scroll-animate stagger-4 ${contactRef.isVisible ? "visible" : ""}`}
          >
            <Link
              to="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
