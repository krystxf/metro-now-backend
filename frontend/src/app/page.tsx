import Image from "next/image";

const LandingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-slate-800">Metro Now!</h1>
        <p className="text-slate-800">
          Get a real-time overview of metro departures from the nearest stop in
          Prague
        </p>
        <h2>Coming to App Store soon</h2>
        <Image
          src="/download-on-appstore.svg"
          alt="Download on App Store badge"
          width={150}
          height={50}
          priority
        />
      </div>
      <Image
        src="/metro-now-watch.png"
        alt="Apple watch screenshots"
        width={1200}
        height={1200}
        priority
      />

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://github.com/krystxf/metro-now"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-50"
          target="_blank"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Source code
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Every line of code for this project is available on GitHub.
          </p>
        </a>
      </div>
    </main>
  );
};

export default LandingPage;
