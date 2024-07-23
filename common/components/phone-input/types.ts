export interface CountrySelectorDropdownStyleProps {
  style?: React.CSSProperties;
  className?: string;
  listItemStyle?: React.CSSProperties;
  listItemClassName?: string;
  listItemFlagStyle?: React.CSSProperties;
  listItemFlagClassName?: string;
  listItemCountryNameStyle?: React.CSSProperties;
  listItemCountryNameClassName?: string;
  listItemDialCodeStyle?: React.CSSProperties;
  listItemDialCodeClassName?: string;
  preferredListDividerStyle?: React.CSSProperties;
  preferredListDividerClassName?: string;
}

export interface CountrySelectorStyleProps {
  style?: React.CSSProperties;
  className?: string;
  buttonStyle?: React.CSSProperties;
  buttonClassName?: string;
  buttonContentWrapperStyle?: React.CSSProperties;
  buttonContentWrapperClassName?: string;
  flagStyle?: React.CSSProperties;
  flagClassName?: string;
  dropdownArrowStyle?: React.CSSProperties;
  dropdownArrowClassName?: string;
  dropdownStyleProps: CountrySelectorDropdownStyleProps;
}
