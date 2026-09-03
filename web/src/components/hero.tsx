type Props = {
  imgSource: string;
};

export default function Hero({ imgSource }: Props) {
  return (
    <section className="relative h-dvh">
      <img src={imgSource} className="relative h-full w-full object-cover" />
      <div className="absolute z-10 gap-4 inset-0 flex flex-col justify-center items-center px-4 text-center">
        <div className="w-full, max-w-3xl">
          <h1 className="font-eb-garamond text-4xl font-bold italic text-white">
            Whereas Luxuries from the <s>Great Silk Road</s> Aplared
          </h1>
          <p className="mt-4 text-neutral-light">
            Discover hand-selected treasures, rare spices, and masterful
            textiles curated for the modern connoisseur. Each piece tells a
            story of ancient routes and artisan hands.
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-overlay" />
    </section>
  );
}
