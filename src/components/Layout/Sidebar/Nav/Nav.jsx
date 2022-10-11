import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import s from '../Nav/Nav.module.scss';
import UserMenu from 'components/UserMenu';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18next';
import { Button } from '@mui/material';

const Nav = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
  };

  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
  };

  return (
    <div className={s.wrapper}>
      <div className={s.nav}>
        <div className={s.nav__link}>
          <NavLink end className={getActiveClassName} to="/">
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {t('navigate.home')}
          </NavLink>
          <div className={s.btn_wrapper}>
            {i18n.language === 'ua' && (
              <Button
                variant="contained"
                type="button"
                onClick={() => changeLanguage('en')}
              >
                UA
              </Button>
            )}

            {i18n.language === 'en' && (
              <Button
                variant="contained"
                type="button"
                onClick={() => changeLanguage('ua')}
              >
                EN
              </Button>
            )}
          </div>
          <NavLink className={getActiveClassName} to="/contacts">
            <CallSharpIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {t('navigate.contact')}
          </NavLink>
        </div>
        <div>
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default Nav;
