import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { css } from '@emotion/react';

import imageSrc from '../../../data/image';

const imageWrapper = css`
  position: relative;
  width: 10rem;
  height: 10rem;
  margin: 0.5rem;
`;

function MarqueeImages() {
  const [images, setImages] = useState<number[]>([]);
  const [speed, setSpeed] = useState(15);
  useEffect(() => {
    const randomArray = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 77)
    );
    setImages(randomArray);
    setSpeed(Math.floor(Math.random() * 20) + 15);
  }, []);

  return (
    <Marquee speed={speed} loop={0} gradient={false}>
      {images.map((rand: number, index: number): JSX.Element => {
        return (
          <div css={imageWrapper} key={index}>
            <Image
              src={imageSrc[rand]}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        );
      })}
    </Marquee>
  );
}

export default MarqueeImages;
