import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="site-main grow p-4 font-noto">
        <div className="container mx-auto">
          <div className="mr-auto mt-4 flex w-full max-w-2xl flex-col rounded-lg border border-gray-300 bg-surface p-6 shadow-lg md:w-1/2">
            <h1 className="text-3xl font-bold font-noto mb-6">
              Looking for the best way to play Holdfast?
              <br />
              <span className="text-yellow-500 font-noto">
                Join the 44th Regiment of Foot!
              </span>
            </h1>
            <h2 className="text-xl font-bold font-noto mb-6">
              We are a group of lads who like to play the game casually, we are centred around fun when it comes to the game 
              such as chaotic line formations which usually end up with us getting shot by artillery, but it is always a laugh.
              <br /><br />
              With loads of ranks to climb and a great community to be a part of, 
              we are always looking for more <span className="line-through">cannon fodder</span> members to join our ranks!
              <br /><br />
              If you are interested and want to see more, then go to our about page here!
            </h2>
            <a href="/about" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              About Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
