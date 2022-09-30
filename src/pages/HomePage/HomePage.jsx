import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import s from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.text}>My Book Contact <ContactPhoneIcon sx={{ fontSize: 40, marginLeft: 3 }}/></h1>
      <div>
        <img className={s.img}
          src="https://hips.hearstapps.com/hmg-prod/images/040-sinatra-1591300404.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
          alt="dress book"
        />
      </div>
    </div>
  );
};

export default HomePage;
