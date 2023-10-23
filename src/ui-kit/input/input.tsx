import React, {useMemo} from 'react';
import cn from 'classnames';
import styles from './styles.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  extClassName?: string;
  error?: boolean;
  errorText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({value, onChange, extClassName, error, errorText, ...props}, ref) => {
    const errorToRender = useMemo(
      () =>
        error && errorText ? (
          <span className={cn(styles.error, 'text')}>{errorText}</span>
        ) : null,
      [error, errorText]
    );

    return (
      <div className={cn(styles.container, extClassName)}>
        <input
          ref={ref}
          type='text'
          value={value}
          className={cn(styles.input, 'border', 'text')}
          onChange={onChange}
          {...props}
        />
        {errorToRender}
      </div>
    );
  }
);
