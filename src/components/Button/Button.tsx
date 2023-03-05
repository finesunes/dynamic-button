import clsx from 'clsx'

import BaseButton, {
  BaseButtonProps,
  BaseButtonComponent,
} from '../BaseButton/BaseButton'

import styles from './Button.module.scss'

export type ButtonProps<C extends BaseButtonComponent = 'button'> =
  BaseButtonProps<C> & {
    loading?: boolean
    disabled?: boolean
  }

export function Button<C extends BaseButtonComponent = 'button'>({
  className,
  loading,
  disabled,
  ...props
}: ButtonProps<C>) {
  return (
    <BaseButton<C>
      className={clsx(
        styles.button,
        {
          [styles.loading]: loading,
          [styles.disabled]: disabled,
        },
        className,
      )}
      {...(props as BaseButtonProps<C>)}
    />
  )
}
