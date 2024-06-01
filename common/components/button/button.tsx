import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  role?: string;
  id?: string;
}

export function Button({ children, href, className, role, id }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} role={role} id={id} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button role={role} id={id} className={className}>
      {children}
    </button>
  );
}
