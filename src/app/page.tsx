import Main from "@/components/main/mainHero/Main";
import About from "@/components/main/mainAbout/About";
import Services from "@/components/main/mainServices/Services";

export default function Home() {
  return (
    <main>
      <section>
        <Main />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
    </main>
  );
}
