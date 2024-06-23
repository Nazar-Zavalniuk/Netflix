import { IIcon } from "@/common/types";

export default function Plus({ width = 16, height = 16, className }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
