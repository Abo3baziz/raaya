import Hero from "./ui/Hero";
import Navbar from "./ui/navbar";
import WhoWeAre from "./ui/WhoWeAre";
import Doctors from "./ui/Doctors";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      <WhoWeAre />

      <Doctors />
    </div>
  );
}
