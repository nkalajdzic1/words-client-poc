import styled from "styled-components";

import { Layout } from "lib/components";

const Container = styled.div`
  text-align: center;
`;

const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <h3>About</h3>
        <p>
          This is a pagination example made in ReactJS and ExpressJS. <br />
          It shows how to create a paginated list on both the client and the
          server side.
        </p>
        <p></p>
      </Container>
    </Layout>
  );
};

export default AboutPage;
