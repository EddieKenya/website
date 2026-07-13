export default function Navbar() {
  return (
    <nav className="absolute w-full z-50 flex justify-between items-center p-6 text-white">
      <h2 className="text-xl md:text-2xl font-serif">Vjosa</h2>
      
      {/* Responsive spacing: space-x-4 on mobile, space-x-6 on desktop */}
      <div className="flex space-x-4 md:space-x-6 font-sans text-xs md:text-sm tracking-widest uppercase">
        <a href="#menu" className="hover:text-stone-300 transition-colors">Menu</a>
        <a href="#events" className="hover:text-stone-300 transition-colors">Events</a>
        <a href="#contact" className="hover:text-stone-300 transition-colors">Contact</a>
      </div>
    </nav>
  );
}