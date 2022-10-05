import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import s from './User.module.scss';

const UserProfile = () => {
  const { data, status } = useSelector(state => state.profile);

  if (!data) {
    return <>Error</>;
  }

  if (!status) {
    return;
  }

  return (
    <div className={s.wrapper}>
      <div>
        <Avatar className={s.avatar}>{data.name[0].toUpperCase()}</Avatar>
      </div>

      <div>
        <p className={s.title}> {data.name}</p>
        <p className={s.text}>{data.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
