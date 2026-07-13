const menuItems = [
  { category: "Bakery", name: "Classic Croissant", price: "$6.00" },
  { category: "Bakery", name: "Bacon Cheddar Scone", price: "$4.50" },
  { category: "Lunch", name: "Chicken Pesto Panini", price: "$13.00" },
  { category: "Drinks", name: "Vjosa Latte", price: "$5.00" },
];

export default function MenuGrid() {
  return (
    <section id="menu" className="py-12 md:py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Daily Offerings</h2>
        
        {/* Responsive grid: 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {menuItems.map((item, index) => (
            <div key={index} className="flex justify-between items-baseline border-b border-stone-200 pb-2">
              <div>
                <span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">{item.category}</span>
                <span className="font-sans font-medium text-lg">{item.name}</span>
              </div>
              <span className="font-medium text-stone-700">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}