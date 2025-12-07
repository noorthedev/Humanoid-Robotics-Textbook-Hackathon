import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Inside This AI-Native Robotics Textbook',
    description: (
      <>
        This is a complete AI-native engineering curriculum designed for
        physical AI, humanoid robots, embodied intelligence, ROS 2 programming,
        digital twin simulations, and Vision-Language-Action (VLA) systems.
        Each module builds your robotics superpowers step by step.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <Heading
          as="h1"
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            marginBottom: '1rem',
            marginTop: '1rem',
          }}
        >
          {title}
        </Heading>

        <p
          style={{
            fontSize: '1.35rem',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: 1.6,
            color: '#4a4a4a',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
