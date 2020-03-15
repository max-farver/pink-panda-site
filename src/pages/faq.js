import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';

const FAQ = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <Layout>
      <Main>
        <h1>F.A.Q.</h1>
        <FaqItem>
          <button onClick={() => setSelectedItem(0)}></button>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            repudiandae perferendis repellendus animi repellat? Eveniet,
            similique voluptatem? Dignissimos, earum est?
          </h3>
          <motion.p
            animate={{
              scaleY: selectedItem == 0 ? 1 : 0,
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            facere temporibus itaque at possimus impedit adipisci. Tenetur
            ratione omnis, excepturi, voluptates vero voluptatem enim
            reprehenderit quis, dignissimos totam cum cupiditate facere.
            Repudiandae, maiores assumenda sequi vitae recusandae autem
            perferendis tempora nihil quae natus fuga deserunt! Enim earum vel
            quisquam nulla.
          </motion.p>
        </FaqItem>
        <FaqItem>
          <button onClick={() => setSelectedItem(1)}></button>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            voluptate!
          </h3>
          <motion.p
            animate={{
              scaleY: selectedItem == 1 ? 1 : 0,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem architecto, molestias minus sequi itaque at, quas
            nesciunt similique repellat aliquid consequuntur dolorem, atque
            alias corporis? Distinctio id debitis architecto eligendi velit
            facere qui labore voluptate!
          </motion.p>
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
        <FaqItem>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            porro repudiandae quo.
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            fugit veritatis. Maiores quas in aut odio sapiente culpa? Eos
            incidunt libero sequi quis autem quam minus, recusandae soluta
            blanditiis inventore.
          </p>
        </FaqItem>
        <FaqItem>
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi suscipit voluptas quis est dolore temporibus
            dolorum.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam
            facilis expedita tempora enim excepturi illum sint eligendi
            laudantium hic, consectetur officia, sed obcaecati doloribus velit
            fugit nostrum blanditiis dolorem vel nemo eum porro iusto deleniti?
            Cum nisi atque culpa magnam quia possimus laborum doloremque, id,
            quaerat officiis maxime, voluptas tempora soluta quae praesentium
            aut. Iusto expedita repudiandae sed laudantium.
          </p>
        </FaqItem>
        <FaqItem>
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            voluptatum sit inventore. Enim.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            magnam quae architecto quod dolorem natus debitis unde temporibus
            consequatur nisi velit deserunt cupiditate quibusdam minima ducimus
            tempora nobis aut? Ullam ipsa tempora non praesentium hic voluptate,
            nostrum exercitationem quae, temporibus, nemo suscipit. Ipsa quo
            inventore sed quas accusamus non a, placeat modi! Reprehenderit non
            ratione, soluta praesentium quisquam consequuntur libero. Recusandae
            delectus quis nobis numquam?
          </p>
        </FaqItem>
      </Main>
    </Layout>
  );
};

const Main = styled.main`
  max-width: ${props => props.theme.screen.xl};
  padding: 0 1rem;
  margin: 6rem auto 0 auto;

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
  background: #ddd;
  border-radius: 5px;
  padding: 1rem;
  margin: 0.5rem 0;
  position: relative;

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
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
