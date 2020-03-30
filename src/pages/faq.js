import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const FAQ = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <Layout>
      <SEO title={`FAQ`} />
      <Main>
        <h1>F.A.Q.</h1>
        <FaqItem>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            repudiandae perferendis repellendus animi repellat? Eveniet,
            similique voluptatem? Dignissimos, earum est?
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            facere temporibus itaque at possimus impedit adipisci. Tenetur
            ratione omnis, excepturi, voluptates vero voluptatem enim
            reprehenderit quis, dignissimos totam cum cupiditate facere.
            Repudiandae, maiores assumenda sequi vitae recusandae autem
            perferendis tempora nihil quae natus fuga deserunt! Enim earum vel
            quisquam nulla.
          </p>
        </FaqItem>
        <FaqItem>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            voluptate!
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem architecto, molestias minus sequi itaque at, quas
            nesciunt similique repellat aliquid consequuntur dolorem, atque
            alias corporis? Distinctio id debitis architecto eligendi velit
            facere qui labore voluptate!
          </p>
        </FaqItem>
        <FaqItem>
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            incidunt quod aliquid tenetur iusto reprehenderit.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, quis
            dolorem! Maiores deserunt dolor voluptas exercitationem tempora quae
            laboriosam velit error voluptates expedita, consequatur eius sequi
            modi! Perferendis voluptas qui culpa. Blanditiis exercitationem esse
            omnis voluptatem cum commodi eos earum.
          </p>
        </FaqItem>
      </Main>
    </Layout>
  );
};

const Main = styled.main`
  max-width: ${props => props.theme.screen.xl};
  padding: 0 1rem;
  h1 {
    display: inline;
    background-image: linear-gradient(
      0deg,
      ${props => props.theme.color.primary.five} 0%,
      ${props => props.theme.color.primary.five} 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 0.25em;
    background-position: 0 85%;
  }
`;

const FaqItem = styled.article`
  border-radius: 5px;
  margin: 0.5rem 0 4rem 0;
  position: relative;

  h3 {
  }

  p {
    position: relative;
    transform-origin: top;
  }

  button {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: transparent;
    border: none;

    :focus,
    :hover,
    :active {
      outline: none;
    }
  }
`;

export default FAQ;
