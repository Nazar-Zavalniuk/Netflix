import ActionBlock from "./action-block";
import Logo from "./images/logo";

export function Header() {
  return (
    <header className="responsive-header bg-black p-6 m-auto box-content">
      <div className="h-8 md:h-11">
        <div className="header-container">
          <Logo />
          <ActionBlock />
        </div>
      </div>
    </header>
  );
}
