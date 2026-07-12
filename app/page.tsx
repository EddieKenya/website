import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuGrid from '@/components/MenuGrid';
import EventForm from '@/components/EventForm';
import Footer from '@/components/Footer'; // Import this

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MenuGrid />
      <EventForm />
      <Footer /> {/* Add this here */}
    </main>
  );
}