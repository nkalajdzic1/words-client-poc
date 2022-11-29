import styled from "styled-components";

import { Button, Input, Layout } from "lib/components";
import { useQueryParams } from "lib/hooks";
import { useEffect, useState } from "react";

import { useWords } from "./useWords";

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  min-width: 50px;
  display: grid;
  place-content: center;
`;

const List = styled.ul`
  margin-block: 5%;
  padding: 0;
  width: clamp(300px, 60%, 900px);
`;

const ListItem = styled.li`
  list-style: none;
`;

const H4 = styled.h4`
  border-bottom: 1px solid white;
  padding-bottom: 5px;
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

  const prevPage = () => setPageNumber((prevState) => prevState - 1);
  const nextPage = () => setPageNumber((prevState) => prevState + 1);

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
      <ButtonWrapper>
        <Container>
          {pageNumber > 1 && <Button onClick={prevPage}>Prev</Button>}
        </Container>
        <Container>{pageNumber}</Container>
        <Container>
          {pageNumber * pageSize < words?.total && (
            <Button onClick={nextPage}>Next</Button>
          )}
        </Container>
      </ButtonWrapper>
      {isLoadingWords ? (
        <h4>Loading...</h4>
      ) : (
        <List>
          {words?.list.map((x, i) => (
            <ListItem key={`word-${x.id}-${i}`}>
              <H4>{x.word}</H4>
              <i>{x.definition}</i>
            </ListItem>
          ))}
        </List>
      )}
    </Layout>
  );
};

export default HomePage;
