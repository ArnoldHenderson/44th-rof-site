import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { InfoCards } from "../components/info-cards";

export default function About() {
  return (
    <>
      <Header />

      <main className="site-main grow p-4 font-noto">
        <div className="container mx-auto">
          <h1 className="mb-6 text-3xl font-bold font-noto">About the 44th</h1>

          <p className="mb-6 text-1xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur atque facilis similique temporibus libero aspernatur
            laudantium molestiae reiciendis adipisci, sed vitae error facere cum
            et repudiandae amet corporis quod ipsum velit sunt neque porro
            mollitia? Provident nobis vero eum cupiditate facilis rerum et
            maiores cum molestias, dolorem temporibus quaerat recusandae
            quisquam ratione doloremque officiis, autem veniam at nulla
            praesentium quidem debitis eius. Tempore, quis facere? Voluptates
            optio dolores hic architecto impedit maxime saepe incidunt repellat
            inventore, dolor nihil omnis ad iste magni nesciunt quam quaerat sit
            unde, nostrum cumque. Deleniti similique neque ipsam veniam enim
            dignissimos quod accusantium unde reprehenderit!
          </p>
          <p className="mb-6 text-1xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatem, officia cumque similique pariatur atque nulla soluta
            sequi maiores excepturi adipisci doloribus perferendis recusandae
            accusamus necessitatibus voluptate, ipsa dolor, ducimus accusantium
            sed repellendus facere! Vitae, modi. Optio, culpa maiores eligendi,
            dolor, sed pariatur neque eaque aliquid voluptas tenetur suscipit!
            Incidunt, tenetur.
          </p>
        </div>

        <br />
        <hr className="my-8 border-gray-300" />
        <br />

        <div className="container mx-auto mt-8">
          <InfoCards />
        </div>

        <br />
        <br />
      </main>

      <Footer />
    </>
  );
}
