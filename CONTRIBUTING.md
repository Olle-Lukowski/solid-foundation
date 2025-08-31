# Contributing to Solid Foundation

Thank you for your interest in contributing to Solid Foundation! This document provides guidelines and information for contributors.

## Development Setup

### Prerequisites

- Node.js v22.18.0 (see `.node-version`)
- pnpm package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Olle-Lukowski/solid-foundation.git
   cd solid-foundation
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

## Development Workflow

### Available Scripts

- `pnpm build` - Build all packages
- `pnpm dev` - Start development mode for all packages
- `pnpm test` - Run tests in watch mode
- `pnpm test:run` - Run tests once
- `pnpm test:ui` - Run tests with UI
- `pnpm test:coverage` - Run tests with coverage report
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm lint` - Run linting (if configured)

### Project Structure

```
solid-foundation/
├── packages/
│   ├── primitive-button/     # Button primitive component
│   └── primitives/           # Collection of primitives
├── apps/
│   └── playground/           # Development playground
├── tooling/
│   └── vite-config/          # Shared Vite configuration
└── .github/
    └── workflows/            # CI/CD workflows
```

### Package Development

Each package should:

1. **Export components and utilities** from `src/index.ts` or `src/index.tsx`
2. **Include TypeScript definitions** for all public APIs
3. **Have comprehensive tests** in `src/*.test.tsx` files
4. **Include a README.md** with usage examples
5. **Follow semantic versioning** for releases

## Testing

We use Vitest for testing with Solid Testing Library:

```tsx
// TODO: Add example
```

Run tests with:

```bash
pnpm test
```

## Code Style and Standards

### TypeScript

- Use TypeScript for all new code
- Prefer interfaces over types for public APIs
- Use strict mode settings
- Include JSDoc comments for public APIs

### SolidJS Best Practices

- Use reactive primitives appropriately (`createSignal`, `createEffect`, etc.)
- Prefer composition over inheritance
- Use `createMemo` for expensive computations
- Handle cleanup in effects when necessary

### Component Guidelines

- Accept `children` as a prop when appropriate
- Use `splitProps` for separating local and forwarded props
- Include proper ARIA attributes for accessibility
- Support customization through props and CSS variables

## Commit Guidelines

We use conventional commits:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example:

```bash
git commit -m "feat: add loading state to Button component"
```

## Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following the guidelines above
3. **Add tests** for new functionality
4. **Update documentation** if necessary
5. **Run the full test suite** to ensure nothing is broken
6. **Create a pull request** with a clear description

### PR Template

Please use the provided PR template and include:

- Clear title describing the changes
- Detailed description of what was changed and why
- Screenshots for UI changes
- Link to related issues

## Release Process

We use Changesets for version management:

1. **Make changes** and commit them
2. **Create a changeset**:
   ```bash
   pnpm changeset
   ```
3. **Push changes** to create a PR
4. **Merge PR** - this will create a release PR
5. **Merge release PR** - this will publish to NPM

## Getting Help

- **Documentation**: Check the README files in each package
- **Issues**: Search existing issues or create a new one
- **Discussions**: Use GitHub Discussions for questions

## Code of Conduct

This project follows the Contributor Covenant Code of Conduct. By participating, you agree to abide by its terms.

Thank you for contributing to Solid Foundation! 🎉
