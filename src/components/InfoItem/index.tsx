import React, { useState, MouseEvent, ReactElement } from "react";
import { Tooltip } from "antd";

import { StyledLabel, StyledText, StyledListItem } from "./styles";

type Props = {
  label: string;
  value: string | ReactElement;
};

function InfoItem({ label, value }: Props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const handleMouseOver = (event: MouseEvent<HTMLDivElement>) => {
    const elem = event?.currentTarget?.childNodes[1] as HTMLParagraphElement;
    setShowTooltip(elem.offsetWidth !== elem.scrollWidth);
  };

  return (
    <StyledListItem onMouseOver={handleMouseOver}>
      <StyledLabel>{label}</StyledLabel>
      <Tooltip
        title={showTooltip && value}
        placement="topRight"
        getPopupContainer={(trigger) => trigger.parentElement || document.body}
      >
        <StyledText>{value}</StyledText>
      </Tooltip>
    </StyledListItem>
  );
}

export default InfoItem;
