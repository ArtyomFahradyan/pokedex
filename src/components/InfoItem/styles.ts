import styled from "styled-components";
import { Typography, List } from "antd";
const { Text } = Typography;

export const StyledText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0;
`;

export const StyledLabel = styled(Text)`
  margin-right: 16px;
  min-width: fit-content;
  color: black;
`;

export const StyledListItem = styled(List.Item)`
  && {
    padding: 0 0 12px 0;
  }
`;
