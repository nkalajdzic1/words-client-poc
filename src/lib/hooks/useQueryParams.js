import { useState, useCallback } from "react";

import { SORT_ORDER } from "lib/constants";

export const useQueryParams = (initialFilter = {}, resetData) => {
  // filter related state
  const [search, setSearch] = useState(initialFilter.search || "");

  // page related state
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(initialFilter.pageSize || 10);

  // sorting related state
  const [sortBy, setSortBy] = useState(initialFilter.sortBy);
  const [order, setOrder] = useState(initialFilter.order);

  const onSortChange = useCallback(
    (newSortBy, newSortOrder = SORT_ORDER.ASC) => {
      if (resetData) resetData();
      setPageNumber(1);
      setSortBy(newSortBy);
      setOrder(newSortOrder);
    },
    [resetData]
  );

  const onSearchChange = useCallback(
    (value) => {
      if (resetData) resetData();
      setPageNumber(1);
      setSearch(value);
    },
    [resetData]
  );

  return [
    { search, onSearchChange },
    { pageNumber, pageSize, setPageNumber, setPageSize },
    { sortBy, order, onSortChange },
  ];
};
