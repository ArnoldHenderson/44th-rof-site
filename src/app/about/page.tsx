import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

export default function About() {
  return (
    <>
      <Header />

      <main className="site-main grow p-4 font-noto">
        <div className="container mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold">
            About the 44th Regiment of Foot
          </h1>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Who We Are</h2>
            <p className="mb-4 text-lg">
              The 44th Regiment of Foot is a gaming community dedicated to
              playing Holdfast: Nations At War with a focus on fun, camaraderie,
              and casual gameplay. We're a group of lads who enjoy the game on
              our own terms, prioritizing enjoyment over pure competitive play.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Our Philosophy</h2>
            <p className="mb-4 text-lg">
              We believe that gaming is about having a laugh with friends. While
              we take pride in our ranks and organizational structure, we never
              lose sight of what matters most: enjoying each other's company and
              the game itself. Our chaotic line formations and unexpected
              artillery strikes are part of what makes our gameplay memorable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Join Our Ranks</h2>
            <p className="mb-4 text-lg">
              We're always looking for new members to join our growing
              community. Whether you're an experienced Holdfast player or just
              picking up the game, there's a place for you in the 44th Regiment.
              We have various ranks to climb and a welcoming community ready to
              help you get started.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Get Involved</h2>
            <p className="mb-4 text-lg">
              Want to join us? Head over to our Discord server to introduce
              yourself and learn more about upcoming operations and events. We
              regularly organize coordinated gameplay sessions and welcome both
              new and experienced players.
            </p>
          </section>

          <div className="mt-12 rounded-lg border border-gray-300 bg-gray-50 p-6 dark:border-gray-600 dark:bg-gray-900">
            <p className="mb-4 text-center text-lg font-semibold">
              Ready to join the ranks?
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://discord.gg/44th"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition-colors"
              >
                Join Our Discord
              </a>
              <a
                href="https://ko-fi.com/44throf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-red-600 px-6 py-2 text-white hover:bg-red-700 transition-colors"
              >
                Support Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
