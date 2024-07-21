import { Background } from "../background";
import { Footer } from "../footer";
import { Header, HeaderProps } from "../header";

interface FormOnlyPageTemplateProps {
  headerProps?: HeaderProps;
  form: React.ReactNode;
}

export function FormOnlyPageTemplate(props: FormOnlyPageTemplateProps) {
  const { headerProps, form } = props;

  return (
    <div className="flex flex-col w-full h-full">
      <div className="relative flex-auto">
        <Header {...headerProps} />
        <div className="hidden sm:block">
          <Background />
        </div>
        {form}
      </div>
      <div className="border-solid border-[#808080b3] border-t-[1px] sm:border-t-0">
        <Footer />
      </div>
    </div>
  );
}
