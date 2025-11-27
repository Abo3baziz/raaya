import Hero from "./ui/Hero";
import Navbar from "./ui/navbar";
import WhoWeAre from "./ui/WhoWeAre";
import Doctors from "./ui/Doctors";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="mx-32">
          <Navbar />
        </div>
        <div className="flex-1 grid bg-gold-cream">
          <Hero />
        </div>
      </div>

      <WhoWeAre />

      <Doctors />
    </div>
  );
}
