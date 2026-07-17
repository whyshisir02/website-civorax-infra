type Props = {
  title: string;
  description: string;
};

export default function HeroSection({
  title,
  description,
}: Props) {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pb-12 pt-20 sm:px-8 lg:px-16 lg:pb-14 lg:pt-24">
      <div className="max-w-4xl">
        <h1 className="font-sora text-[40px] font-bold leading-[1.08] tracking-[-0.05em] text-[#1c1c19] sm:text-[54px] lg:text-[58px]">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-[#3d4a43] sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}