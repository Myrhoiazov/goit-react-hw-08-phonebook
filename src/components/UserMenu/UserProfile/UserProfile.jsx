import { useSelector } from 'react-redux';
import s from './User.module.scss'

const UserProfile = () => {
  const { data, status } = useSelector(state => state.profile);

  if (!data) {
    return;
  }

  if (!status) {
    return;
  }

  return (
    <div className={s.wrapper}>
      <p className={s.title}> {data.name}</p>
      <p className={s.text}>{data.email}</p>
    </div>
  );
};

export default UserProfile;
