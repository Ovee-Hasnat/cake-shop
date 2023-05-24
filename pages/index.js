import AboutUs from "@/components/AboutUs";
import CakeTypeBox from "@/components/CakeTypeBox";
import CustomizedCake from "@/components/CustomizedCake";
import Delivery from "@/components/Delivery";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Payment from "@/components/Payment";
import PrintedCakes from "@/components/PrintedCakes";
import TopProducts from "@/components/TopProducts";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <Hero />
      </section>

      {/* Top Products */}
      <section>
        <TopProducts />
      </section>

      {/* About RIC */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Cake types */}
      <section>
        <CakeTypeBox />
      </section>

      {/* Printed Cakes */}
      <section>
        <PrintedCakes />
      </section>

      {/* Customized Cakes */}
      <section>
        <CustomizedCake />
      </section>

      {/* Delivery System */}
      <section>
        <Delivery />
      </section>

      {/* Payment Methods */}
      <section>
        <Payment />
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </main>
  );
}
