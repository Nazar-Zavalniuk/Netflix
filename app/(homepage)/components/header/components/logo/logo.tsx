import LogoIcon from "./icons/logo";

export function Logo() {
  return (
    <div className="inline-flex flex-[0_auto] ml-2 mt-2 w-auto md:ml-4 md:flex-[0_0_calc(33.333%-1rem)] relative">
      <span>
        <LogoIcon className="block fill-red-100 overflow-hidden md:w-[9.25rem] md:h-10" />
        <span className="absolute w-px h-px overflow-hidden">Netflix</span>
      </span>
    </div>
  );
}
