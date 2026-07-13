export default function EventForm() {
  return (
    <section id="events" className="py-12 md:py-20 bg-stone-100 px-4 md:px-6">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 shadow-lg">
        <h3 className="text-2xl md:text-3xl font-serif mb-6 text-center">Inquire About Our Space</h3>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-4 border border-stone-300 focus:outline-stone-900" 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-4 border border-stone-300 focus:outline-stone-900" 
          />
          <select className="w-full p-4 border border-stone-300 bg-white focus:outline-stone-900">
            <option>Corporate Event</option>
            <option>Wedding/Party</option>
            <option>Other</option>
          </select>
          <textarea 
            placeholder="Tell us about your event" 
            className="w-full p-4 border border-stone-300 h-32 focus:outline-stone-900" 
          />
          <button 
            type="submit" 
            className="w-full bg-stone-900 text-white py-4 hover:bg-stone-700 transition-colors uppercase tracking-widest text-sm"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}