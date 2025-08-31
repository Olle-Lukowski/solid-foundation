import { render } from '@solidjs/testing-library'
import { Button } from './index'
import { describe, expect, test } from 'vitest'

describe('Button', () => {
  test('renders correctly', () => {
    const { getByText } = render(() => <Button>Click me</Button>)
    const button = getByText('Click me')
    expect(button).toBeInTheDocument()
  })
})
