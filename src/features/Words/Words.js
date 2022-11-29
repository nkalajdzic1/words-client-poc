import styled from "styled-components";

import { Button, Input, Layout } from "lib/components";
import { useQueryParams } from "lib/hooks";
import { useEffect, useState } from "react";

import { useWords } from "./useWords";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ListItem = styled.li`
  list-style: none;
`;

const HomePage = () => {
  const [searchVal, setSearchVal] = useState("");

  const [{ search, onSearchChange }, { pageNumber, pageSize, setPageNumber }] =
    useQueryParams();

  const { data: words, isLoading: isLoadingWords } = useWords({
    search,
    pageNumber,
    pageSize,
  });

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      onSearchChange(searchVal);
    }, 1000);

    return () => clearTimeout(searchTimeout);
  }, [searchVal, onSearchChange]);

  return (
    <Layout>
      <h3>Words</h3>
      <Input
        placeholder="Search..."
        onChange={(e) => setSearchVal(e.target.value)}
      />
      {isLoadingWords ? (
        <h4>Loading...</h4>
      ) : (
        <ul>
          {words?.list.map((x, i) => (
            <ListItem key={`word-${x.id}-${i}`}>
              <h4>{x.word}</h4>
              <i>{x.definition}</i>
            </ListItem>
          ))}
        </ul>
      )}
      <ButtonWrapper>
        {pageNumber > 1 && (
          <Button onClick={() => setPageNumber((prevState) => prevState - 1)}>
            Prev
          </Button>
        )}
        <div>{pageNumber}</div>
        {pageNumber * pageSize < words?.total && (
          <Button onClick={() => setPageNumber((prevState) => prevState + 1)}>
            Next
          </Button>
        )}
      </ButtonWrapper>
    </Layout>
  );
};

export default HomePage;
