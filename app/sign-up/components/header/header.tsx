interface HeaderProps {
  currentStep: number;
  amountOfSteps: number;
  title: string;
  className?: string;
}

export function Header(props: HeaderProps) {
  const { currentStep, amountOfSteps, title, className } = props;

  return (
    <div role="status" className={className}>
      <span className="uppercase text-[0.8125rem]">
        Step <b>{currentStep}</b> of <b>{amountOfSteps}</b>
      </span>
      <h1 className="text-[1.5rem] font-medium">{title}</h1>
    </div>
  );
}
