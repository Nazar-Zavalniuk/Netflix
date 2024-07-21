import { ActionBlockWrapper } from "./components/action-block-wrapper";
import { HeaderWrapper } from "./components/header-wrapper";
import { LanguageSelect } from "./components/language-select";
import { Logo } from "./components/logo";
import { SignInButton } from "./components/sign-in-button";

export interface HeaderProps {
  logoType?: "logo" | "link logo";
  showLanguageSelect?: boolean;
  showSignInButton?: boolean;
}

export function Header(props: HeaderProps) {
  const {
    logoType = "logo",
    showLanguageSelect = true,
    showSignInButton = true,
  } = props;

  const actionBlock =
    showLanguageSelect || showSignInButton ? (
      <ActionBlockWrapper>
        {showLanguageSelect && <LanguageSelect />}
        {showSignInButton && <SignInButton />}
      </ActionBlockWrapper>
    ) : null;

  return (
    <HeaderWrapper>
      <Logo type={logoType} />
      {actionBlock}
    </HeaderWrapper>
  );
}
