import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import imagePng from '@/assets/imagePng.png';
import imageJpg from '@/assets/imageJpg.jpg';
import ImageSvg from '@/assets/imageSvg.svg';

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev <= 0 ? prev : prev - 1));

  return (
    <div>
      <div data-testid={'App.dataTestId'}>PLATFORM={__PLATFORM__}</div>
      <div data-testid={'imageIds'}>
        <img width={100} height={100} src={imagePng} alt="" />
        <img width={100} height={100} src={imageJpg} alt="" />
      </div>

      <div>
        <ImageSvg fill={'blue'} width={100} height={30} />
      </div>

      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <br />

      <span className={classes.value}>{count}</span>
      <button className={classes.button} onClick={increment}>
        Increment
      </button>
      <button className={classes.button} onClick={decrement}>
        Decrement
      </button>

      <Outlet />
    </div>
  );
};
