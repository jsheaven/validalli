<h1 align="center">validalli</h1>

> A fast, functional, reliable and small form validation library that aims for correctness and simplicity

<h2 align="center">Purpose</h2>

Form validation can become a complex thing to implement. The idea of this library is to take a straight-forward,
functional approach to the API, allow for composition, but at the same time provide all the primitives
necessary to do the most relevant validations such as email etc. out-of-the-box.

<h2 align="center">Features</h2>

- ✅ Validate input using simple functional API
- ✅ Just `1.13k` nano sized core library (ESM, gizpped)
- ✅ Tree-shakable and side-effect free, so probably just `~500 bytes` in your app
- ✅ Isomorphic, runs on client and server
- ✅ Async from the ground up
- ✅ Works with scalar values, composed object form-data types
- ✅ Extemely fast
- ✅ Compatible with every framework/library
- ✅ Simple, composable validator logic
- ✅ Sequential mode (stop on first error (default))
- ✅ Full result mode (run all validations)
- ✅ Translatable error messages
- ✅ Arbitrary error message return types (e.g. JSX, VNode, etc.)
- ✅ Comes with a robust set of validator primitives
- ✅ First class TypeScript support
- ✅ 100% Unit Test coverage

<h2 align="center">Install</h2>

- yarn: `yarn add validalli`
- npm: `npm install validalli`

<h2 align="center">Example</h2>

<h3 align="center">ESM</h2>

```ts
import { validate, isEmpty, isUrlPath, isOneOf, type Validator } from 'validalli'

// compose your own validators based on core validators,
// this way, internationalization and custom errors are simple
// validators can also be async
export const isSlugCorrect: Validator = ({ value }) => {
  if (!isEmpty(value) && isUrlPath(value)) {
    return true
  }
  return `Slug looks invalid: ${value}`
}

// many validator functions are pretty simple, but need to
// use custom data to check against; this logic should also
// be unit testable. Writing your own validator functions helps alot.
export const isLanguageSupported: Validator = ({ value }) =>
  isOneOf(value, ['de', 'en']) ?? `Language not supported: ${value}`

// user-provided input, aggregated as an object
const someFormState = {
  sitePath: '/foo-bar',
  language: 'fr',
}

const validationState = await validate<NewPageModel>(someFormState, {
  sitePath: isSlugCorrect, // one or more validator function can be passed via Array
  language: isLanguageSupported,
})

// as 'fr' is not supported, the validationState would look like this:
/**
 * {
 *   isValid: false,
 *   sitePath: {
 *     isValid: true
 *   },
 *   language: {
 *     isValid: false,
 *     message: 'Language not supported: fr'
 *   }
 * }
 */
```

<h3 align="center">CommonJS</h2>

```ts
const { getStorage } = require('validalli')

// same API like ESM variant
```

<h2 align="center">One thing on framework integrations</h2>

This is a validation library only. As every modern frontend framework supports some time
of one-, two- or unidirectional data binding or even full-featured true reactivity,
it should be rather easy to integrate this library in any application out there.

If you need help with integration, feel free to start a new discussion thread.
