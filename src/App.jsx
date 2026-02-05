import React from 'react';
import { 
  CameraIcon, 
  UserGroupIcon, 
  HashtagIcon 
} from '@heroicons/react/24/outline';

export default function App() {
  return (
    <div className="flex flex-col bg-white overflow-x-hidden w-full max-w-[1440px] mx-auto">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[700px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Hero.jpg" 
            className="w-full h-full object-cover grayscale-[10%]" 
            alt="Salon Background" 
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <header className="absolute top-0 w-full z-50 flex justify-between items-center px-12 pt-6 pb-10">
          <div className="flex items-center gap-4">
            <div className="border border-white/80 w-10 h-10 flex items-center justify-center text-[10px] uppercase tracking-[0.1em] font-bold text-white">
              The
            </div>
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white">
              Perfect Cut
            </div>
          </div>
          <nav className="hidden md:flex gap-12 text-[16px] uppercase font-medium font-montserrat text-white/90 tracking-[0.15em]">
            <a href="#about" className="hover:text-[#C5A059] transition-colors">ABOUT</a>
            <a href="#pricing" className="hover:text-[#C5A059] transition-colors">PRICING</a>
            <a href="#contact" className="hover:text-[#C5A059] transition-colors">CONTACT</a>
          </nav>
        </header>

        <div 
          className="absolute top-0 z-10 flex flex-col justify-center px-24 bg-[#0B1518A6] backdrop-blur-sm text-white"
          style={{ left: '840px', width: '600px', height: '700px' }}
        >
          <h1 className="max-w-[412px] text-[64px] leading-none mb-8 uppercase font-bold font-Cormorant tracking-normal">
            <span className="block mb-7">THE</span> 
            <span className="block whitespace-nowrap">PERFECT CUT</span>
          </h1>
          <p className="text-gray-100 text-[18px] leading-relaxed mb-8 max-w-xs font-['Montserrat'] font-semibold">
            We see “YOU” and we create the look that matches best your personality.
          </p>
          <div className="w-24 h-[1px] bg-white/30 mb-12"></div>
          <div className="text-[16px] uppercase font-['Montserrat'] font-bold mb-12 tracking-[0.4em] leading-[1.4]">
            NEW YORK • SINCE 2000
          </div>
          <div className="flex gap-1">
            <button className="w-14 h-14 bg-[#A5836ACC] border border-white/10 flex items-center justify-center hover:bg-[#C5A059] transition-all">
              <span className="text-xl">←</span>
            </button>
            <button className="w-14 h-14 bg-[#A5836ACC] border border-white/10 flex items-center justify-center hover:bg-[#C5A059] transition-all">
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* SECTION 2: ABOUT */}
      <section className="relative w-full max-w-[1440px] mx-auto h-[700px] bg-[#080D10] overflow-hidden">
        <div 
          className="absolute top-0 left-0 z-10 flex flex-col justify-center px-16 text-white"
          style={{ width: '840px', height: '700px' }}
        >
          <span className="font-['Montserrat'] font-semibold text-[20px] leading-none tracking-[0.15em] uppercase text-[#C5A059] mb-8">
            ABOUT
          </span>
          <h2 className="font-['Cormorant'] font-bold text-[54px] leading-none tracking-tight mb-10 whitespace-nowrap">
            We tell amazing stories with hair
          </h2>
          <p className="font-['Montserrat'] font-medium text-[20px] leading-[36px] tracking-normal text-gray-300 mb-12 max-w-[680px]">
            You dream about sleek, healthy looking hair that looks picture perfect, ready to rock on any occasion? We will make your dreams come true.
          </p>
          <button className="w-fit border border-white px-10 py-4 text-[10px] uppercase tracking-[0.15em] font-bold hover:bg-white hover:text-black transition-all">
            VIEW MORE
          </button>
        </div>
        <div 
          className="absolute top-0 z-0"
          style={{ left: '840px', width: '600px', height: '700px' }}
        >
          <img src="/images/image.jpg" className="w-full h-full object-cover" alt="Hair Detail" />
        </div>
      </section>

      {/* SECTION 3: OPENING HOURS */}
      <section id="hours" className="bg-[#F4EDE6] pt-32 pb-16 px-12 text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center justify-center md:border-r border-black/10 md:pr-16">
            <span className="font-['Montserrat'] font-semibold text-[20px] leading-[36px] tracking-[0.15em] mb-4 uppercase text-center">
              WELCOME
            </span>
            <h2 className="text-6xl md:text-7xl font-serif mb-10 text-center leading-tight">
              Opening Hours
            </h2>
            <button className="bg-black text-white px-12 py-4 text-[10px] font-['Montserrat'] font-semibold tracking-[0.15em] hover:bg-[#C5A059] transition-colors uppercase">
              BOOK NOW
            </button>
          </div>
          <div className="flex flex-col justify-center space-y-8 text-[22px] tracking-[0.15em] font-semibold md:pl-16 uppercase">
            <p>Monday to Friday / 08:00 - 20:00</p>
            <p>Saturday / 10:00 - 18:00</p>
            <p>Sunday / 10:00 - 18:00</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: NATURAL STYLING */}
      <section className="relative w-full max-w-[1440px] h-[600px] mx-auto overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 grid grid-cols-2 w-full h-full">
          <div className="relative h-full">
            <img src="/images/model-left.jpg" className="w-full h-full object-cover grayscale" alt="Natural styling left" />
          </div>
          <div className="relative h-full">
            <img src="/images/model-right.jpg" className="w-full h-full object-cover grayscale" alt="Natural styling right" />
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div 
          style={{ backgroundColor: '#070F12B2' }}
          className="relative z-10 backdrop-blur-sm w-[646px] h-[340px] flex flex-col items-center justify-center text-center px-12 border border-white/5"
        >
          <h2 className="text-white text-5xl md:text-6xl font-serif mb-6 leading-tight uppercase tracking-tight">
            Natural styling <br /> and cuts
          </h2>
          <p className="text-gray-300 text-[15px] leading-relaxed font-semi-Bold Monteserrat max-w-[480px]">
            You dream about sleek, healthy looking hair that looks picture perfect, ready to rock on any occasion? We will make your dreams come true.
          </p>
        </div>
      </section>

      {/* SECTION 5: FEATURES */}
      <section id="features" className="bg-white py-32 px-12 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 text-center">
          {[
            { t: "Personalized Experience", d: "Each guest is our favourite guest. Come and make sure that our service is exceptional.", i: "icon_1.svg" },
            { t: "Professional Care", d: "All products we use are professional and have proven efficiency. No compromises.", i: "icon_2.svg" },
            { t: "We Care What We Do", d: "People that you'll meet in our studio are doing job they love. Come and make sure there is a difference.", i: "icon_3.svg" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-20 h-20 mb-8 bg-[#F4F1EE] rounded-full flex items-center justify-center">
                <img src={`/images/${item.i}`} className="w-10 h-10" alt={item.t} />
              </div>
              <h3 className="font-serif text-2xl mb-6 text-black tracking-widest uppercase font-bold">
                {item.t.split(' ')[0]} <br /> {item.t.split(' ').slice(1).join(' ')}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTIONS 6-8: TEAM PROFILES */}
      <section id="team">
        {[
          { n: "Oliiae Vandervort", r: "MANAGER", i: "manager.jpg", s: "left" },
          { n: "Morris Homenick", r: "HAIR STYLIST / COLORIST", i: "stylist-morris.jpg", s: "right" },
          { n: "Nancy Gibson", r: "HAIR STYLIST / COLORIST", i: "Nancy.jpg", s: "left" }
        ].map((p, i) => (
          <div key={i} className="grid md:grid-cols-2 min-h-screen bg-[#F4F1EE] text-black border-b border-black/5">
            <div className={`h-[60vh] md:h-screen ${p.s === 'right' ? 'md:order-2' : ''}`}>
              <img src={`/images/${p.i}`} className="w-full h-full object-cover" alt={p.n} />
            </div>
            <div className="flex flex-col justify-center px-12 md:px-24 py-20 text-center relative overflow-hidden">
               <span className="absolute text-[20rem] font-serif italic text-black/5 -bottom-20 -right-10 pointer-events-none">P</span>
               <h2 className="text-5xl md:text-7xl font-serif mb-4 z-10">{p.n}</h2>
               <span className="text-[10px] tracking-[0.4em] font-bold text-gray-500 block mb-12 z-10">{p.r}</span>
               <p className="font-medium Montesrrat text-gray-600 mb-12 max-w-md mx-auto z-10 leading-relaxed">
                 Designed to maintain your current colour, blend out a growing root or balance your blonde while providing full and demi-permanent coverage.
               </p>
               <button className="bg-black text-white px-12 py-5 text-[10px] tracking-[0.4em] font-bold mx-auto z-10 hover:bg-[#C5A059] transition-colors uppercase">Book Appointment</button>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 9: PRICING */}
      <section id="pricing" className="relative min-h-screen bg-black flex items-center justify-center py-32 px-12 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white opacity-[0.03] text-[40rem] font-serif italic">P</span>
        </div>
        <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-[1fr_2fr] gap-24 items-start">
          <h2 className="text-7xl font-semi-Bold text-white Cormoramt text-right leading-none">Pricing <br /> List</h2>
          <div className="space-y-12">
            {[
              { n: "HAIR CUT WITH BLOW DRY", p: "$35" },
              { n: "BLOW DRY & CURLS", p: "$25" },
              { n: "COLOR & HIGHLIGHTS", p: "$100" },
              { n: "SHAMPOO & SET", p: "$45" }
            ].map((item, i) => (
              <div key={i} className="flex items-center text-white group cursor-default">
                <span className="text-[10px] tracking-[0.4em] font-bold group-hover:text-[#C5A059] transition-colors">{item.n}</span>
                <div className="flex-grow border-b border-white/20 mx-4 h-1"></div>
                <span className="text-[10px] tracking-[0.4em] font-bold text-lg">{item.p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM GALLERY */}
      <section className="bg-white py-24 px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="/images/gallery-1.jpg" className="aspect-[4/5] object-cover bg-gray-100" alt="G1" />
            <img src="/images/gallery-2.jpg" className="aspect-[4/5] object-cover bg-gray-100" alt="G2" />
            <img src="/images/gallery-3.jpg" className="aspect-[4/5] object-cover bg-gray-100" alt="G3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black flex flex-col items-center justify-center relative aspect-[4/5] md:aspect-auto">
              <span className="absolute text-[12rem] font-serif italic text-white/5 bottom-0 right-0">P</span>
              <h2 className="text-white text-5xl font-serif mb-6 z-10">Follow Us</h2>
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </div>
            <img src="/images/gallery-4.jpg" className="md:col-span-2 aspect-[16/9] md:aspect-auto object-cover bg-gray-100" alt="G4" />
          </div>
        </div>
      </section>

      {/* SECTION 12: CONTACT */}
      <section id="contact" className="relative w-[1440px] h-[700px] mx-auto grid grid-cols-2 bg-[#F4EFE9] text-black overflow-hidden">
        <div className="relative w-[720px] h-[700px] overflow-hidden">
          <img src="/images/contact.jpg" className="w-full h-full object-cover grayscale" alt="Contact" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#00000080] backdrop-blur-md w-[420px] h-[420px] flex items-center justify-center p-8 text-center border border-white/10">
              <h2 className="text-white text-5xl md:text-6xl font-['Cormorant'] uppercase leading-[1.1] tracking-wide">
                We would <br /> like to <br /> hear from <br /> you
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[720px] h-[700px] flex flex-col justify-start px-16 pt-20 pb-12">
          <form className="space-y-8 w-full max-w-lg">
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-3">
                <label className="text-[11px] font-bold tracking-[0.2em] uppercase">First Name</label>
                <input className="bg-transparent border-b border-black/60 pb-2 focus:outline-none" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[11px] font-bold tracking-[0.2em] uppercase">Last Name</label>
                <input className="bg-transparent border-b border-black/60 pb-2 focus:outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-3">
                <label className="text-[11px] font-bold tracking-[0.2em] uppercase">Phone</label>
                <input className="bg-transparent border-b border-black/60 pb-2 focus:outline-none" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[11px] font-bold tracking-[0.2em] uppercase">Email</label>
                <input className="bg-transparent border-b border-black/60 pb-2 focus:outline-none" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <label className="text-[11px] font-bold tracking-[0.2em] uppercase">Interested In</label>
              <div className="flex flex-wrap gap-3">
                {['Hair cut', 'Coloring', 'Straightening'].map((service) => (
                  <button key={service} type="button" className="border border-black/40 px-6 py-2.5 text-[12px] font-['Montserrat'] hover:bg-black hover:text-white transition-all">
                    {service}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[11px] font-bold tracking-[0.2em] uppercase">Message</label>
              <input className="bg-transparent border-b border-black/60 pb-2 focus:outline-none w-full" />
            </div>
            <button className="bg-black text-white w-fit px-12 py-4 text-[11px] tracking-[0.2em] font-bold hover:bg-[#C5A059] transition-all uppercase mt-2">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 13: FOOTER */}
      <footer className="bg-black text-white pt-24 pb-12 px-12 overflow-hidden w-full min-h-[491px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-[1fr_1fr_1.2fr] gap-12 md:gap-24 mb-24 items-start">
            <div className="space-y-10">
              <div className="flex items-center gap-2">
                <div className="border border-white px-2 py-1.5 leading-none">
                  <span className="text-[14px] tracking-[0.1em] uppercase font-bold">The</span>
                </div>
                <span className="text-[20px] tracking-[0.2em] uppercase font-bold">Perfect Cut</span>
              </div>
              <p className="text-gray-400 text-[14px] font-['Montserrat']">
                B 35, Some street address, New York
              </p>
              <div className="flex gap-4 pt-4">
                {[
                  { id: 'ig', Icon: CameraIcon },
                  { id: 'fb', Icon: UserGroupIcon },
                  { id: 'pt', Icon: HashtagIcon }
                ].map((social) => (
                  <div key={social.id} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black cursor-pointer hover:bg-[#C5A059] hover:text-white transition-all">
                    <social.Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[16px] tracking-[0.2em] uppercase font-bold text-gray-400 font-['Montserrat']">
                Opening Hours
              </h4>
              <div className="space-y-4 text-[14px] font-['Montserrat'] font-semibold tracking-wide">
                <p>Working days / 08:00 - 20:00</p>
                <p>Saturday / 08:00 - 20:00</p>
                <p>Sunday / CLOSED</p>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-[18px] font-['Montserrat'] leading-relaxed max-w-[380px]">
                Stay informed about our monthly promotions, products & more
              </p>
              <div className="space-y-4">
                <label className="text-[12px] tracking-[0.2em] uppercase font-bold text-gray-400 block">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/40 pb-2 focus:outline-none focus:border-white transition-colors" 
                />
              </div>
              <button className="bg-white text-black px-10 py-4 text-[12px] tracking-[0.4em] font-bold hover:bg-[#C5A059] hover:text-white transition-all uppercase">
                Send
              </button>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12 text-center text-[14px] opacity-60 font-['Montserrat'] uppercase font-semibold">
            ©DESIGNED BY SWAMI NAWALE
          </div>
        </div>
      </footer>
    </div>
  );
}