import React, { BaseSyntheticEvent } from "react";

import { ReactComponent as SearchIcon } from "src/assets/iconSearch.svg";
import { ReactComponent as BasketIcon } from "src/assets/basketIcon.svg";
import { ReactComponent as UserIcon } from "src/assets/userIcon.svg";

import { IconType } from "src/types/enums";

const icons = {
  [IconType.search]: SearchIcon,
  [IconType.basket]: BasketIcon,
  [IconType.user]: UserIcon,
};

interface IconProps {
  className?: string;
  onClick?: (e: BaseSyntheticEvent) => void;
}

export function getIcon(type: IconType): React.FC<IconProps> {
  return icons[type] as React.FC<IconProps>;
}
