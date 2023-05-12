import { FC } from "react";
import styled from "styled-components";
import { Input } from "antd";
import { InputProps } from "antd/lib/input";

export const Search: FC<InputProps> = styled(Input)`
  border: none;
  border-radius: 10px;
  padding: 9px 10px 9px 14px;
  margin-bottom: 20px;

  input {
    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
  }

  &&.ant-input-affix-wrapper-focused {
    box-shadow: none;
  }

  svg {
    width: 16px;
    height: 16px;
    position: relative;
    right: 2px;
  }
`;
