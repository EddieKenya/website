import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-stone-800 overflow-hidden">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Local background image */}
      <Image 
        src="/vjosa.jpg" 
        alt="Vjosa Cafe Interior" 
        fill
        priority
        className="object-cover"
      />

      {/* Hero content */}
      <div className="relative z-20 text-center text-white px-4 w-full">
        {/* Adjusted text sizes for better mobile scaling */}
        <h1 className="text-5xl md:text-8xl font-serif mb-4">Vjosa</h1>
        <p className="text-base md:text-2xl font-light mb-8 italic px-2">Coffee. Culture. Celebration.</p>
        
        <a 
          href="#events" 
          className="inline-block border border-white px-8 py-3 md:px-10 md:py-4 hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs md:text-sm"
        >
          Book Private Event
        </a>
      </div>
    </section>
  );
}