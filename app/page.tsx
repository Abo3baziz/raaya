import Hero from "./ui/Hero";
import Navbar from "./ui/navbar";
import WhoWeAre from "./ui/WhoWeAre";
import Doctors from "./ui/Doctors";
import Plans from "./ui/Plans";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      <WhoWeAre />

      <Doctors />

      <Plans />
    </div>
  );
}
