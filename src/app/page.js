import Hero from "@/components/modules/Hero";
import WysiwygMedia from "@/components/modules/WysiwygMedia";
export default function Home() {
  return (
    <main className="main">
      <Hero>
        <h1 className="dave">Hello Dave</h1>
      </Hero>
      <WysiwygMedia image="/placeholder.jpg">
        <p>Some stuff here</p>
      </WysiwygMedia>
    </main>
  );
}
