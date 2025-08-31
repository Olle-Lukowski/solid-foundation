import { Button } from '@solid-foundation/primitives'

export default function App() {
  return <Button on:click={() => alert('clicked')}>Click me!</Button>
}
