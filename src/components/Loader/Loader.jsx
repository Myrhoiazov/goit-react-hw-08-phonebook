import style from './Loader.module.scss';
import { ThreeDots } from 'react-loader-spinner';

function Loader() {
  return (
    <div className={style.wrapper}>
      <ThreeDots color="#780685" />
    </div>
  );
}

export default Loader;
