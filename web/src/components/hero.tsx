type Props = {
  imgSource: string;
};

export default function Hero({ imgSource }: Props) {
  return (
    <section className="relative h-dvh">
      <img src={imgSource} className="h-full w-full object-cover" />

      <div className="absolute inset-0 bg-overlay" />

      <div className="absolute inset-0 z-10 w-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-eb-garamond text-4xl font-bold italic text-white md:text-6xl">
          Luxuries from <s className="opacity-70">the Great Silk Road </s>
          Aplared
        </h1>
        <p className="mt-4 max-w-4xl text-sm text-neutral-light md:text-base">
          Discover hand-selected treasures, rare spices, and masterful textiles
          curated for the modern connoisseur. Each piece tells a story of
          ancient routes and artisan hands.
        </p>
      </div>
    </section>
  );
}
