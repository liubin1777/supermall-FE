import React from 'react';
import styles from './index.module.css';

interface iProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export default ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: iProps) => {
  return (
    <div className={styles.tabbar}>
      tabbar
    </div>
  );
};
