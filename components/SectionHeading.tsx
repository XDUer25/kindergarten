export function SectionHeading({
  eyebrow,
  title,
  desc
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#4aa9d5] uppercase">
        {eyebrow}
      </p>
      <h2 className="text-[1.7rem] font-bold leading-tight text-[#1f3440] sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {desc ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5c7480] md:text-lg">
          {desc}
        </p>
      ) : null}
    </div>
  );
}
