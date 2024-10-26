import estrellas from "../assets/images/illustration-five-stars.webp";
import redesImg from "../assets/images/illustration-multiple-platforms.webp";
import dataTimeImg from "../assets/images/illustration-consistent-schedule.webp";
import calendarImg from "../assets/images/illustration-schedule-posts.webp";
import dataFolowImg from "../assets/images/illustration-grow-followers.webp";
import audenceImg from "../assets/images/illustration-audience-growth.webp";
import buttonImg from "../assets/images/illustration-create-post.webp";
import comentImg from "../assets/images/illustration-ai-content.webp";

const App = () => {
  return (
    <section
      // bg-[#f5f5f5] background color main section
      className=" bg-red-300
    lg:w-4/5 lg:h-[700px] lg:py-0 lg:gap-3 lg:items-stretch lg:m-auto lg:grid lg:grid-cols-4 lg:grid-rows-4
    flex flex-col gap-6 items-center py-7 px-4 "
    >
      <article className="lg:h-64 lg:m-0 flex flex-col lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-4 p-10 justify-center items-center bg-[#7651dc] text-white rounded-2xl text-center">
        <h1 className="text-[40px] leading-10 font-semibold mb-5 text-[#fffafc]">
          Social Media <span className="text-[#fed09b]">10x</span>{" "}
          <span className="italic">Faster</span> with AI
        </h1>
        <img src={estrellas} className="w-48" alt="cantidad de estrellas" />
        <p>Over 4,000 5-star reviews</p>
      </article>

      <article className="lg:h-48 lg:relative lg:bottom-[82px] lg:row-start-3 lg:col-start-2 p-4 bg-white rounded-lg">
        <img src={redesImg} alt="Imagenes de redes" />
        <h2 className="text-2xl font-semibold">
          Manage multiple accounts and platforms.
        </h2>
      </article>

      <article className="lg:h-48 lg:relative lg:bottom-[84px] lg:col-start-3 lg:row-start-3 h-52 p-4 bg-[#ffcc69] overflow-hidden rounded-lg">
        <h2 className="text-2xl font-semibold">
          Maintain a consistent posting schedule.
        </h2>
        <img className="lg:w-40 w-56 relative mt-4" src={dataTimeImg} alt="" />
      </article>

      <article className="bg-[#dcd1fc] p-4 rounded-lg lg:h-max">
        <h2 className="mt-2 mb-5 font-semibold text-2xl">
          Schedule to social media.
        </h2>
        <img src={calendarImg} alt="" />
        <p className="mt-5 text-center text-lg font-semibold text-slate-800">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </article>

      <article className="lg:h-52 lg:relative lg:bottom-12 lg:flex-row lg:col-start-3 lg:gap-2 lg:col-end-5 lg:row-start-4 lg:row-end-5 py-5 px-10 flex flex-col items-center bg-[#7651dc] rounded-lg">
        <img src={dataFolowImg} alt="" className="my-7 lg:w-48" />
        <h2 className="lg:text-start text-white text-3xl font-semibold text-center ">
          Grow followers with non-stop content.
        </h2>
      </article>

      <article className="lg:h-max lg:relative lg:bottom-12 lg:col-start-2 lg:row-start-4 p-5 flex flex-col gap-3 w-full bg-white rounded-lg">
        <h1 className="text-5xl font-semibold">{`>56%`}</h1>
        <p className="text-lg mb-1 font-semibold">Faster audience growth</p>
        <img className="w-48" src={audenceImg} alt="" />
      </article>

      <article className="lg:flex lg:justify-center lg:items-center lg:flex-col p-4 rounded-lg bg-[#faeee2] lg:row-start-1 lg:row-end-3 lg:col-start-1">
        <h2 className="lg:text-start mb-5 text-3xl font-semibold">
          Create and schedule content
          <span className="lg:block text-[#7355d3] italic"> quicker.</span>
        </h2>
        <img className="w-48" src={buttonImg} alt="" />
      </article>

      <article className="lg:row-start-3 lg:row-end-5 lg:col-start-1 bg-[#ffcc69] p-7 rounded-lg">
        <h2 className="mb-5 text-3xl font-semibold">
          Write your content using AI.
        </h2>
        <img className="w-48 lg:bg-center" src={comentImg} alt="" />
      </article>
    </section>
  );
};

export default App;
