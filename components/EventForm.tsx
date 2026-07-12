export default function EventForm() {
  return (
    <section id="events" className="py-20 bg-stone-100 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 shadow-lg">
        <h3 className="text-3xl font-serif mb-6 text-center">Inquire About Our Space</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-stone-300" />
          <input type="email" placeholder="Email Address" className="w-full p-3 border border-stone-300" />
          <select className="w-full p-3 border border-stone-300">
            <option>Corporate Event</option>
            <option>Wedding/Party</option>
            <option>Other</option>
          </select>
          <textarea placeholder="Tell us about your event" className="w-full p-3 border border-stone-300 h-32" />
          <button className="w-full bg-stone-900 text-white py-4 hover:bg-stone-700">Send Inquiry</button>
        </form>
      </div>
    </section>
  );
}