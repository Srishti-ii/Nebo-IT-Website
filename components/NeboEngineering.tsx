import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';


const NeboEngineering: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'services' | 'products'>('services');
  const [expandedBio, setExpandedBio] = useState<number | null>(null);

  const toggleBio = (index: number) => {
    setExpandedBio(expandedBio === index ? null : index);
  };

  // Animation variants for the staggered text reveal in the Hero
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 selection:bg-amber-400 selection:text-slate-900 flex flex-col min-h-screen">
      
      {/* 1. Hero Section - Professional Two-Column Layout */}
      <section className="relative bg-[#0f172a] text-white min-h-[90vh] flex items-center overflow-hidden pt-24 pb-16">
        
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-amber-500/10 blur-[120px] rounded-full pointer-events-none transform translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left"
          >
            {/* Logo / Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg p-2">
                 {/* Replace with actual logo from brochure */}
                 <img src="../images/nebo_logo.png"  alt="Nebo Logo" className="w-full h-full object-contain" />
              </div>
              <div className="px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-sm font-bold tracking-widest uppercase shadow-sm">
                Committed to Quality
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl lg:text-5xl font-extrabold tracking-tight mb-6 text-white leading-[1.1]">
              NEBO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                ENGINEERING
              </span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-slate-300 max-w-xl">
              DELIVERING ALL-IN-ONE SOLAR SOLUTIONS TAILORED TO YOUR NEEDS
            </motion.h2>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => { setActiveTab('services'); window.scrollTo({ top: 800, behavior: 'smooth' }); }}
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Our Services
              </button>
              <button 
                onClick={() => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }}
                className="px-8 py-4 bg-transparent hover:bg-white/5 border-2 border-slate-600 hover:border-slate-400 text-white font-bold rounded-lg transition-all duration-300"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Presentation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img 
                src="../images/solar.avif" 
                alt="Solar Panel Installation" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Floating Experience Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-xl shadow-2xl border border-slate-100 max-w-[250px]"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-2xl">
                  ☀️
                </div>
                <div>
                  <h4 className="font-black text-[#0f172a] text-xl">100%</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Sustainable</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-2 font-medium">Harnessing the power of the sun to propel your business forward.</p>
            </motion.div>
            
            {/* Background Decorative Accent */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-amber-500/20 rounded-2xl z-0 pointer-events-none"></div>
          </motion.div>

        </div>
      </section>

      {/* 2. Welcome Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6 uppercase">
          WELCOME TO NEBO ENGINEERING: EMPOWERING YOUR SOLAR FUTURE
        </h2>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto mb-6">
          At Nebo Engineering, we are dedicated to harnessing the power of the sun to create sustainable energy solutions that propel your business forward. As a dynamic startup specializing in solar technologies, we offer a comprehensive range of services tailored to meet your energy needs.
        </p>
      </section>

      {/* 3. Interactive Tabs */}
      <section className="bg-white py-20 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4 md:gap-8 mb-12 border-b border-gray-300 pb-4">
            <button 
              onClick={() => setActiveTab('services')}
              className={`text-2xl font-bold transition-all ${activeTab === 'services' ? 'text-[#0f172a] border-b-4 border-amber-400' : 'text-gray-400 hover:text-gray-600'}`}
            >
              OUR SERVICES
            </button>
            <button 
              onClick={() => setActiveTab('products')}
              className={`text-2xl font-bold transition-all ${activeTab === 'products' ? 'text-[#0f172a] border-b-4 border-amber-400' : 'text-gray-400 hover:text-gray-600'}`}
            >
              SOLAR ILLUMINATION
            </button>
          </div>

          {/* Tab Content: Services */}
          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in fade-in duration-500">
              <div className="group rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000" alt="Solar Rooftops" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-grow bg-white">
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Solar Rooftops</h3>
                  <p className="text-slate-600 mb-2">Efficiently utilize your rooftop space with our expertly designed solar rooftop solutions.</p>
                  <p className="text-slate-600">From initial assessment to installation and maintenance, we ensure seamless integration and optimal performance.</p>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1508514177221-188b1c77eca1?q=80&w=1000" alt="Solar Ground Mounted" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-grow bg-white">
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Solar Ground Mounted Systems</h3>
                  <p className="text-slate-600 mb-2">Maximize land utility with our robust solar ground mounted systems.</p>
                  <p className="text-slate-600">Whether for commercial, industrial, or utility-scale projects, we deliver scalable solutions that enhance energy efficiency and reduce operational costs.</p>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1000" alt="Opex and Capex" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-grow bg-white">
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Opex and CAPEX Projects</h3>
                  <p className="text-slate-600 mb-2">Navigate the complexities of solar investment with our Opex and CAPEX project expertise.</p>
                  <p className="text-slate-600">We provide comprehensive financial analysis, project planning, and execution to maximize returns on your solar investments.</p>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000" alt="EPC Consultancy Multimeter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-grow bg-white">
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-4">EPC CONSULTANCY</h3>
                  <p className="text-slate-600 mb-2">Benefit from our extensive EPC (Engineering, Procurement, and Construction) consultancy services.</p>
                  <p className="text-slate-600">Our seasoned professionals offer strategic guidance and technical support throughout the project lifecycle, ensuring cost-effective and timely project delivery.</p>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content: Products */}
          {activeTab === 'products' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-[#0f172a] mb-6">OUR SOLAR STREET LIGHTS</h3>
                <p className="text-slate-600 mb-4">At Nebo Engineering, we are committed to pioneering sustainable energy solutions that illuminate the future. Beyond our renowned expertise in solar rooftop installations, we also specialize in cutting-edge solar street lights and innovative solar lighting systems.</p>
                <p className="text-slate-600 mb-4">Our solar street lights combine advanced technology with robust engineering to provide efficient, eco-friendly lighting solutions for urban and rural environments alike.</p>
                <p className="text-slate-600 mb-4">These lights harness solar energy during the day, storing it in high-capacity batteries for reliable nighttime illumination. With minimal maintenance and maximum efficiency, Nebo Engineering's so solar street lights ensure cost-effective and sustainable lighting solutions.</p>
                <div className="mt-6 bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
                  <p className="font-bold text-[#0f172a]">☔ IP65 Waterproof & Lightning Protection</p>
                  <p className="text-sm text-slate-500 mt-1">No fear of bad weather, meet the needs of outdoor use</p>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-lg flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-6">SOLAR FANCY LIGHTS</h3>
                  <p className="text-slate-600 mb-6">In addition to street lights, Nebo Engineering designs a diverse range of solar lights tailored to meet various residential, commercial, and industrial needs. Whether enhancing outdoor spaces or providing safety and security lighting, our solar lights deliver exceptional performance with a focus on durability and energy efficiency.</p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-center gap-3 font-semibold text-[#0f172a]"><span className="text-amber-500">✨</span> Exclusive Solar Lights Collection</li>
                    <li className="flex items-center gap-3 font-semibold text-[#0f172a]"><span className="text-amber-500">✨</span> Solar Wall Light</li>
                    <li className="flex items-center gap-3 font-semibold text-[#0f172a]"><span className="text-amber-500">✨</span> Solar Fence Light</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1000" alt="Worker on Solar Roof" className="w-full h-full object-cover" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-8 uppercase">WHY CHOOSE NEBOENGINEERING FOR SOLAR?</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Innovative Solutions:</h4>
                  <p className="text-slate-600">We leverage cutting-edge technology and industry best practices to deliver innovative solar solutions tailored to your specific requirements..</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Expertise and Experience:</h4>
                  <p className="text-slate-600">With a team of skilled engineers and industry experts, we bring years of experience in solar project development and execution.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Commitment to Sustainability:</h4>
                  <p className="text-slate-600">We are committed to environmental stewardship and helping businesses achieve their sustainability goals through renewable energy solutions.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400">
                   <h4 className="text-lg font-bold text-slate-900 mb-2">Quality:</h4>
                   <p className="text-slate-600">Each product undergoes rigorous quality testing to ensure reliability and longevity, backed by comprehensive warranty and support services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Board of Directors */}
      <section className="bg-white py-20 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f172a] mb-12 uppercase tracking-wide">BOARD OF DIRECTORS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Director 1 */}
            <div onClick={() => toggleBio(0)} className="cursor-pointer bg-slate-50 rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-all">
              <div className="h-64 bg-[#0f172a] flex items-end justify-center overflow-hidden">
                <img src="../images/chairperson.png" alt="Jitendra Prakash Srivastava" className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0f172a] mb-2 uppercase">JITENDRA PRAKASH SRIVASTAVA</h3>
                <p className="text-slate-600 font-medium mb-3 text-sm">J. P. Srivastava having a multifaceted personality is a graduate with post graduate qualification in Management.</p>
                <div className={`text-slate-500 text-sm overflow-hidden transition-all duration-500 ${expandedBio === 0 ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="mb-2">He brings with him a rich experience of more than thirty years in the fields of management, planning, maintenance of Railway Rolling Stock.</p>
                  <p className="mb-2">Third Party Inspection and Quality Assurance of General Engineering Items, Machinery Plant & Equipment and critical as well as safety components.</p>
                  <p className="mb-2">He has in depth knowledge of intricacies of design of components and various causes of failure during service.</p>
                  <p className="mb-2">He has gained this experience while working in different capacities in various Govt. departments and Public Sector Undertakings such as Ministry of Railways, RDSO and RITES where he performed the management functions as well as formulation and finalisation of Tenders for various works.</p>
                  <p>At EliTes he always pursued to master his field of expertise.</p>
                </div>
                <p className="text-sm text-amber-600 font-bold mt-4 uppercase tracking-wider">{expandedBio === 0 ? '- Show Less' : '+ Read Full Bio'}</p>
              </div>
            </div>

            {/* Director 2 */}
            <div onClick={() => toggleBio(1)} className="cursor-pointer bg-slate-50 rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-all">
              <div className="h-64 bg-[#0f172a] flex items-end justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800" alt="Aakash Srivastava" className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0f172a] mb-2 uppercase">Aakash Srivastava</h3>
                <p className="text-slate-600 font-medium mb-3 text-sm">Aakash Srivastava has a Civil Engineering from Institute of Engineering Technology from UP Technical University, Lucknow.</p>
                <div className={`text-slate-500 text-sm overflow-hidden transition-all duration-500 ${expandedBio === 1 ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="mb-2">He has over Five years of professional experience.</p>
                  <p>During this period he has worked in consultancy, Construction supervision and Quality Assurance / Third Party Inspectionof Engineering Stores on for EliTes India.</p>
                </div>
                <p className="text-sm text-amber-600 font-bold mt-4 uppercase tracking-wider">{expandedBio === 1 ? '- Show Less' : '+ Read Full Bio'}</p>
              </div>
            </div>

            {/* Director 3 */}
            <div onClick={() => toggleBio(2)} className="cursor-pointer bg-slate-50 rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-all">
              <div className="h-64 bg-[#0f172a] flex items-end justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" alt="Rita Rai" className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0f172a] mb-2 uppercase">Rita Rai</h3>
                <p className="text-slate-600 font-medium mb-3 text-sm">Rita holds a mechanical engineering degree from Darbhanga College of Engineering, Darbhanga.</p>
                <div className={`text-slate-500 text-sm overflow-hidden transition-all duration-500 ${expandedBio === 2 ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="mb-2">She has 10 years of experience in service industry and served at Eli Technical Economic Services India Pvt. Ltd.</p>
                  <p className="mb-2">During this period she conducted Inspection of Various Engineering Products, Faced external & internal audit as Management representative (like ISO:9000, DRR, ISO:17020), was responsible for carrying out Internal Quality audit for ISO 9001:2015 & ISO 17020:2012, for planning and carrying out Impartiality Committee Meeting and Management Review Meeting.</p>
                  <p className="mb-2">Responsibility of various tender participation process in govt organization. Co-ordination with the purchase representatives in successful execution of works awarded to the company.</p>
                  <p>She is a part of management decision making body.</p>
                </div>
                <p className="text-sm text-amber-600 font-bold mt-4 uppercase tracking-wider">{expandedBio === 2 ? '- Show Less' : '+ Read Full Bio'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Commitment Section */}
      <section className="bg-slate-50 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-6 uppercase">OUR COMMITMENT TO YOU</h2>
          <p className="text-lg text-slate-600 mb-6 italic font-serif">
            "At Nebo Engineering, we believe in forging lasting partnerships built on trust, reliability, and innovation."
          </p>
          <p className="text-slate-600">
            Whether you're looking to illuminate streets, enhance public spaces, or incorporate sustainable lighting solutions into your projects, Nebo Engineering is your trusted partner every step of the way.
          </p>
        </div>
      </section>

      {/* 7. Pre-Footer / Contact Hook */}
      <section className="bg-amber-400 py-16 px-6 text-center text-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 uppercase">CONTACT US TODAY</h2>
          <p className="text-lg font-medium mb-6">
            Discover how NeboEngineering can transform your energy landscape. Whether you're exploring solar options for your business or seeking expert EPC consultancy, Solar street lights & Solar fancy lights, we are here to support you every step of the way.
          </p>
          <p className="text-xl font-bold">
            Together, let's build a brighter, greener future with solar power.
          </p>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-[#0f172a] pt-16 pb-16 mt-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16">
            
            {/* Brand Section */}
            <div className="col-span-1 lg:col-span-2">
              <h2 className="text-3xl font-black mb-1 tracking-tighter text-white">NEBO</h2>
              <span className="text-amber-400 font-bold tracking-widest text-sm uppercase">Engineering</span>
            </div>
            
            {/* Navigation */}
            <div className="col-span-1 lg:col-span-2 mt-4 lg:mt-0">
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Navigation</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-400 transition-colors">Home</button></li>
                <li><button onClick={() => { window.scrollTo({ top: 800, behavior: 'smooth' }); }} className="hover:text-amber-400 transition-colors">Services & Products</button></li>
                <li><button onClick={() => { window.scrollTo({ top: 2200, behavior: 'smooth' }); }} className="hover:text-amber-400 transition-colors">Leadership</button></li>
              </ul>
            </div>

            {/* Offices Section */}
            <div className="col-span-1 lg:col-span-5 mt-4 lg:mt-0">
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Offices</h4>
              <address className="not-italic text-slate-400 space-y-3 text-xs leading-relaxed">
                <p>1. G 204 Shilp residency near prarthna apartment, Hirawadi Road, Bapunagar, Ahmedabad, Gujarat 382345.</p>
                <p>2. Badrish colony lane no. 1, house no. 75, danda dharampur Dehradun, 248001.</p>
                <p>3. R-18 1St Floor, Vikas Marg, Shakarpur, Delhi-110092.</p>
                <p>4. Building No./Flat No.: 6A/183 Road/Street: VIRENDAVAN YOJNA, City/ Town/Village: RAIBARELI ROAD, District: Lucknow, State: Uttar Pradesh, PIN Code: 226029.</p>
                <p>5. K 422, UPSIDC, Site 5, Kasna, Greater Noida, Uttar Pradesh</p>
                <p>6. E/S-6, vanshree c.h.s.ltd, khadakpada, Kalyan (w), Mumbai-421301.</p>
                <p>7. Tamamunda chouk near by Champa fuels petrol pump farsabahar (c.g.) Dist. Jashpur, Chhattisgarh-496242.</p>
              </address>
            </div>

            {/* Contact Section */}
            <div className="col-span-1 lg:col-span-3 mt-4 lg:mt-0">
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Contact</h4>
              <div className="text-slate-400 text-sm space-y-3">
                <p>Contact Us – 8700449133, +91 870-0445434 & 8802239746</p>
            
              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Nebo Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default NeboEngineering;