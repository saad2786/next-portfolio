import { Poppins } from "@next/font/google";
// import { Approach } from "@/components/Approach";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Home() {
  return (
    <main
      className={`relative flex justify-center flex-col mx-auto bg-black-100 overflow-clip ${poppins.className}`}
    >
      <div className='w-full px-6 sm:px-10 flex justify-center flex-col'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Client />
        <Experience />
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
}
