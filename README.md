# Solid Foundation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![SolidJS](https://img.shields.io/badge/SolidJS-1.9.9-blue.svg)](https://solidjs.com)

A monorepo containing high-quality, accessible UI primitives and components built with [SolidJS](https://solidjs.com). Solid Foundation provides a solid foundation for building modern web applications with a focus on performance, accessibility, and developer experience.

## Packages

| Package                                                              | Version                                                                                                                                                | Description                                            |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| [`@solid-foundation/primitive-button`](./packages/primitive-button/) | [![npm version](https://badge.fury.io/js/%40solid-foundation%2Fprimitive-button.svg)](https://badge.fury.io/js/%40solid-foundation%2Fprimitive-button) | Primitive button component with accessibility features |
| [`@solid-foundation/primitives`](./packages/primitives/)             | [![npm version](https://badge.fury.io/js/%40solid-foundation%2Fprimitives.svg)](https://badge.fury.io/js/%40solid-foundation%2Fprimitives)             | Collection of reusable UI primitives                   |

## Quick Start

### Installation

```bash
# Install individual packages
pnpm add @solid-foundation/primitive-button

# Or install the full collections
pnpm add @solid-foundation/primitives
```

### Usage

```tsx
import { Button } from '@solid-foundation/primitive-button'

function App() {
  return (
    <div>
      <Button onClick={() => console.log('Clicked!')}>Click me</Button>
    </div>
  )
}
```

## Development

### Prerequisites

- Node.js v22.18.0 (see `.node-version`)
- pnpm package manager

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Olle-Lukowski/solid-foundation.git
   cd solid-foundation
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start development:
   ```bash
   pnpm dev
   ```

### Available Scripts

| Command              | Description                       |
| -------------------- | --------------------------------- |
| `pnpm build`         | Build all packages                |
| `pnpm dev`           | Start development mode            |
| `pnpm test`          | Run tests in watch mode           |
| `pnpm test:run`      | Run tests once                    |
| `pnpm test:ui`       | Run tests with UI                 |
| `pnpm test:coverage` | Generate coverage report          |
| `pnpm typecheck`     | Run TypeScript checks             |
| `pnpm changeset`     | Create a changeset for versioning |

### Project Structure

```
solid-foundation/
├── packages/           # Individual packages
│   ├── primitive-button/
│   └── primitives/
├── apps/              # Example applications
│   └── playground/
├── tooling/           # Shared tooling and configs
└── .github/           # CI/CD and GitHub templates
```

## Philosophy

Solid Foundation is built with these principles in mind:

- **Performance First**: Built on SolidJS for optimal runtime performance
- **Accessible by Default**: Components follow accessibility best practices
- **Developer Experience**: TypeScript-first with comprehensive documentation
- **Composable**: Primitives designed for composition and customization
- **Tree Shakable**: Only include what you use

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details on:

- Development setup
- Code standards and guidelines
- Testing requirements
- Pull request process
- Release workflow

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Support

- 📖 [Documentation]() (coming soon)
- 🐛 [Issues](https://github.com/Olle-Lukowski/solid-foundation/issues)
- 💬 [Discussions](https://github.com/Olle-Lukowski/solid-foundation/discussions)

---

Built with ❤️ using [SolidJS](https://solidjs.com)
