import Main from "@/components/main/Main";
import About from "@/components/main/mainAbout/page";
import ResidentialServices from "./residential-services/page";

export default function Home() {
  return (
    <main>
      <section>
        <Main />
      </section>
      <section id="about">
        <About />
      </section>
      {/* <section>
        <ResidentialServices />
      </section> */}
    </main>
  );
}
