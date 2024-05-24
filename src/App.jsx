import "./App.css";
import { Container } from "./components";
function App() {
  return (
    <>
      <main className=" min-h-dvh bg-neutral-light-gray grid place-content-center  ">
        <section className="  grid grid-cols-1 p-5 Tablet:grid-cols-2 w-full h-full  Tablet:w-[42.375rem] Tablet:h-[28.875rem]  ">
          <Container style=" bg-white col-span-1  Tablet:col-span-2 w-full rounded-t-lg">
            <h1 className=" text-primary-cyan text-[1.3rem">Join our community</h1>
            <div className="mt-5 ">
              <p className=" text-primary-yellow font-bold">
                {" "}
                30-day, hassle-free money back guarantee{" "}
              </p>
              <p className=" text-neutral-grayish-blue mt-2 max-w-[66ch] ">
                Gain access to our full library of tutorials along with expert
                code reviews. Perfect for any developers who are serious about
                honing their skills.
              </p>
            </div>
          </Container>
          <Container style=" bg-primary-cyan rounded-none  Tablet:rounded-bl-lg text-neutral-light-gray ">
            <div className="flex flex-col gap-3 mb-6">
              <h2>Monthly Subscription</h2>
              <div className=" flex flex-row gap-3 items-center">
              <p className=" font-bold text-4xl  ">
                $29 
              </p>
              <span className=" opacity-75 ">per month</span>{" "}
              </div>
              <p> Full access for less than $1 a day </p>
            </div>
            <button className=" bg-primary-yellow w-full p-3 rounded-md font-bold  shadow-lg hover:text-white transition-colors hover:bg-green-300 duration-500 ease-in-out">Sign Up</button>
          </Container>
          <Container style=" bg-primary-cyan-2 rounded-b-lg Tablet:rounded-b-none Tablet:rounded-br-lg text-neutral-light-gray    ">
            <h2>Why Us</h2>
            <ul className=" opacity-75 mt-2 text-[0.9rem] ">
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
