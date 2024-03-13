import Main from "@/components/main/Main";
import About from "@/components/main/mainAbout/page";


export default function Home() {
  return (
    <main>
      <section>
        <Main />
      </section>
      <section id="about">
        <About />
      </section>
    </main>
  );
}
