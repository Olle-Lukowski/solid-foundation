import { JSX, splitProps } from 'solid-js'
import { mergeProps, Dynamic } from 'solid-js/web'

export interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The element or component to render as. Defaults to "button"
   */
  as?: keyof JSX.IntrinsicElements | ((props: any) => JSX.Element)

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
  const merged = mergeProps(
    {
      as: 'button' as const,
      type: 'button' as const,
      variant: 'primary' as const,
      size: 'md' as const,
      loadingText: 'Loading...',
    },
    props,
  )

  const [local, others] = splitProps(merged, [
    'as',
    'disabled',
    'loading',
    'loadingText',
    'variant',
    'size',
    'children',
  ])

  const isDisabled = () => local.disabled || local.loading

  return (
    <Dynamic
      component={local.as}
      disabled={isDisabled()}
      aria-disabled={isDisabled()}
      aria-busy={local.loading}
      data-variant={local.variant}
      data-size={local.size}
      data-loading={local.loading}
      {...others}
    >
      {local.loading ? local.loadingText : local.children}
    </Dynamic>
  )
}
