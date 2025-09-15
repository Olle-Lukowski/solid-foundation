import { JSX, splitProps } from 'solid-js'

export interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Whether the button is disabled
   */
  disabled?: boolean

  /**
   * Whether the button is in a loading state
   */
  loading?: boolean

  /**
   * Screen reader text for loading state
   */
  loadingText?: string

  /**
   * Button variant for semantic meaning
   */
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost'

  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg'
}

/**
 * A primitive button component
 * A very simple wrapper around a native HTML `button` element, with some extra props for convenience and consistent accessibility.
 */
export function Button(props: ButtonProps) {
  const [local, others] = splitProps(props, ['disabled', 'loading', 'loadingText', 'variant', 'size', 'children'])
  const {
    disabled = false,
    loading = false,
    loadingText = 'Loading...',
    variant = 'primary',
    size = 'md',
    children,
  } = local

  const isDisabled = () => disabled || loading

  return (
    <button
      disabled={isDisabled()}
      aria-disabled={isDisabled()}
      aria-busy={loading}
      data-variant={variant}
      data-size={size}
      data-loading={loading}
      {...others}
    >
      {loading ? loadingText : children}
    </button>
  )
}
