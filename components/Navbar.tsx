export default function Navbar() {
  return (
    <nav className="absolute w-full z-50 flex justify-between items-center p-6 text-white">
      <h2 className="text-2xl font-serif">Vjosa</h2>
      <div className="space-x-6 font-sans text-sm tracking-widest uppercase">
        <a href="#menu" className="hover:text-stone-300">Menu</a>
        <a href="#events" className="hover:text-stone-300">Events</a>
        <a href="#contact" className="hover:text-stone-300">Contact</a>
      </div>
    </nav>
  );
}