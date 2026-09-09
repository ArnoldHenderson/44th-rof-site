import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

export default function About() {
  return (
    <>
      <Header />

      <main className="site-main grow p-4 font-noto">
        <h1 className="mb-6 text-3xl font-bold font-noto">About the 44th!</h1>
      </main>

      <Footer />
    </>
  );
}
