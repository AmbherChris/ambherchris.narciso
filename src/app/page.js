import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col bg-amber-200 justify-center items-center ">


      <div className="relative mt-20 flex flex-col bg-amber-800 items-center text-center ">
        <h1 className="font-onest text-7xl  transform ">
          AMB&nbsp; ER
        </h1>

        <h1 className="text-7xl font-regular transform scale-y-205 left-49.5 absolute  top-[28px] ">
          H
        </h1>
        <h1 className="text-7xl font-regular transform  left-0.5 absolute w-lg   top-[55px] ">
          C&nbsp; RIS
        </h1>
        <div className="flex justify-center items-center gap-4 mt-24 ">
          <Image
            src="/fb.png"       // Place the image inside /public folder
            alt="Description"
            width={512}
            height={512}
            className="h-10 w-auto mr-2"
          />

          <Image
            src="/linkedin.png"       // Place the image inside /public folder
            alt="Description"
            width={512}
            height={512}
            className="h-11 w-auto mb-[2px]"
          />
          <Image
            src="/mail.png"       // Place the image inside /public folder
            alt="Description"
            width={512}
            height={512}
            className="h-16 w-auto"
          />
          <Image
            src="/github.png"       // Place the image inside /public folder
            alt="Description"
            width={512}
            height={512}
            className="h-11 w-auto"
          />

          


        </div>
        <p className="text-center text-[14px]">
            I'm a creative individual with a keen interest in designing, passionate about creating clean and user-friendly interfaces with a strong focus on UX in the tech field. I'm always eager to learn and grow as a designer and developer.
          </p>
      </div>


      <h1 className="mt-100">About Me</h1>


      <div className="bg-amber-400 size-7 mt-100">

      </div>




    </div>
  );
}
