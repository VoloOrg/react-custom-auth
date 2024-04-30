import { FC, RefAttributes } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import styles from "./styles.module.css";
import { combineClassNames } from 'utils/styles';

type CustomProps = {
  primary?: boolean;
};

const AppNavLink: FC<
  NavLinkProps & RefAttributes<HTMLAnchorElement> & CustomProps
> = (props) => {
  const { primary, ...propsWithoutCustomOnes } = props;
  return (
    <NavLink
      className={combineClassNames(
        styles.link,
        primary ? styles.primary : styles.secondary
      )}
      {...propsWithoutCustomOnes}
    >
      {props.children}
    </NavLink>
  );
};

export default AppNavLink;
