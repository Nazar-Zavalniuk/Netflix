interface ServiceInfoProps {
  title: string;
  subtitle: string;
}

export function ServiceInfo({ title, subtitle }: ServiceInfoProps) {
  return (
    <div className="basis-1/2 w-full z-10 md:text-left order-1">
      <h2 className="text-[2rem] font-bold md:text-[3rem] md:font-black">
        {title}
      </h2>
      <p className="mt-4 text-[1.125rem] font-normal tracking-[0.016em] md:text-[1.5rem]">
        {subtitle}
      </p>
      <div className="mt-6" />
    </div>
  );
}
