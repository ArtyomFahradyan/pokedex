import React, { ChangeEvent, useRef } from "react";
import { SearchOutlined } from "@ant-design/icons";

import debounce from "lodash/debounce";

import { Search } from "./styles";

type Props = {
  placeholder?: string;
  defaultValue?: string;
  debounceDelay?: number;
  isMobile?: boolean;
  full?: boolean;
  onSearch: (search: string) => void;
};

function SearchInput({
  placeholder,
  onSearch,
  debounceDelay = 1000,
  defaultValue,
}: Props) {
  const debounceFunction = useRef(
    debounce((search) => {
      onSearch(search.trim());
    }, debounceDelay)
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    debounceFunction.current(e.currentTarget.value);
  };

  return (
    <Search
      defaultValue={defaultValue}
      onChange={handleChange}
      placeholder={placeholder}
      suffix={<SearchOutlined />}
    />
  );
}

export default SearchInput;
