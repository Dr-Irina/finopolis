import cx from "classnames";
import React from "react";
import styles from "./styles.module.scss";

const LayoutHeader = ({ width }) => {

  return (
    <div
      className={cx({
        [styles.layoutHeaderContainer]: true,
        [styles.layoutHeaderContainerMobile]: width < 800,
      })}
    >
        header
    </div>
  );
};

export default LayoutHeader;
