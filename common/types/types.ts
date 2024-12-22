export interface IIcon {
  width?: number;
  height?: number;
  className?: string;
}

export interface IChildren {
  children: React.ReactNode;
}

export type SetStateFunc<T> = (value: T) => void;
