import CheckmarkIcon from "@/common/icons/checkmark";

interface ListOfServiceBenefitsProps {
  list: Array<string>;
}

export function ListOfServiceBenefits(props: ListOfServiceBenefitsProps) {
  const { list } = props;

  const listItems = list.map((description) => {
    const randomNumber = Math.random();

    return (
      <li key={description + randomNumber} className="flex items-start gap-2.5">
        <CheckmarkIcon width={26} height={26} />
        <span className="text-[1.125rem]">{description}</span>
      </li>
    );
  });

  return <ul className="flex flex-col gap-4">{listItems}</ul>;
}
