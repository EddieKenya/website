export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 py-12 px-6">
      {/* grid-cols-1 on mobile, md:grid-cols-2 on desktop */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-white font-serif text-xl">Contact Us</h4>
          <div className="space-y-4">
            <a href="tel:+13128090220" className="flex items-center gap-3 hover:text-white p-2 -ml-2 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +1 312-809-0220
            </a>
            <a href="https://maps.app.goo.gl/YourMapLink" target="_blank" className="flex items-start gap-3 hover:text-white p-2 -ml-2 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>1010 W 35th St Suite 102, <br/>Chicago, IL 60609</span>
            </a>
            <a href="https://www.peerspace.com/..." target="_blank" className="flex items-center gap-3 hover:text-white p-2 -ml-2 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Book Appointments
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="md:text-left">
          <h4 className="text-white font-serif text-xl mb-6">Follow Us</h4>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/vjosachicago/" target="_blank" className="hover:text-white p-2">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.facebook.com/vjosacafe/" target="_blank" className="hover:text-white p-2">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12 pt-8 border-t border-stone-700 text-sm">
        © 2026 Vjosa Cafe & Events.
      </div>
    </footer>
  );
}