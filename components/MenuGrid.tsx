// components/MenuGrid.tsx
const menuItems = [
  { category: "Bakery", name: "Classic Croissant", price: "$6.00" },
  { category: "Bakery", name: "Bacon Cheddar Scone", price: "$4.50" },
  { category: "Lunch", name: "Chicken Pesto Panini", price: "$13.00" },
  { category: "Drinks", name: "Vjosa Latte", price: "$5.00" },
];

export default function MenuGrid() {
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">Our Daily Offerings</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="flex justify-between border-b border-stone-200 pb-2">
              <span className="font-sans font-medium">{item.name}</span>
              <span className="text-stone-500">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}