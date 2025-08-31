# Solid Foundation Button Primitive

A primitive button component for Solid Foundation.
A very simple wrapper around a native HTML `button` element, with some extra props for convenience and consistent accessibility.

## Installation

```bash
pnpm add @solid-foundation/primitive-button
```

## Usage

```tsx
import { Button } from '@solid-foundation/primitive-button'

function App() {
  return <Button>Click me!</Button>
}
```

## Props

### `as`

The element or component to render as. Defaults to `button`.

### `disabled`

Whether the button is disabled. Defaults to `false`.

### `loading`

Whether the button is in a loading state. Defaults to `false`.

### `loadingText`

Screen reader text for loading state. Defaults to `Loading...`.

### `variant`

Button variant for semantic meaning. Defaults to `primary`.

### `size`

Button size. Defaults to `md`.
