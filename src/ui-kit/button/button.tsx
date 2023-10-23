import React from 'react';
import cn from 'classnames';
import styles from './styles.module.css';

export type TButtonProps = React.PropsWithChildren<
  Omit<React.HTMLProps<HTMLButtonElement>, 'size'>
> & {
  htmlType: 'button' | 'submit' | 'reset';
  type?: 'primary' | 'secondary' | 'negative' | 'disabled';
  size?: 'small' | 'large' | 'micro';
  extClassName?: string;
  onClick?: (() => void) | ((e: React.SyntheticEvent) => void);
  disabled?: boolean;
  loading?: boolean;
};

export const Button = ({
  type = 'primary',
  size = 'large',
  children,
  extClassName,
  htmlType,
  disabled,
  loading,
  ...props
}: TButtonProps) => {
  const sizeStyle = styles[`button_size_${size}`];
  const typeStyle = styles[`button_type_${type}`];

  return (
    <button
      type={htmlType}
      className={cn(
        styles.button,
        sizeStyle,
        typeStyle,
        {[styles.button_loading]: loading},
        {[styles.button_disabled]: disabled},
        extClassName
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
