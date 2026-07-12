import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-stone-800 overflow-hidden">
      {/* Dark overlay to ensure text is readable against the photo */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Your local background image */}
      <Image 
        src="/vjosa.jpg" 
        alt="Vjosa Cafe Interior" 
        fill
        priority
        className="object-cover"
      />

      {/* Hero content */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl font-serif mb-4">Vjosa</h1>
        <p className="text-lg md:text-2xl font-light mb-8 italic">Coffee. Culture. Celebration.</p>
        <a 
          href="#events" 
          className="border border-white px-10 py-4 hover:bg-white hover:text-black transition-all uppercase tracking-widest text-sm"
        >
          Book Private Event
        </a>
      </div>
    </section>
  );
}