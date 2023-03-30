# 🕉 @sensethenlove/svelte-loading-anchor


### 🙏 Description
* Svelte component that supports an `href` property, shows a loading icon when clicked & stops loading on page navigate
* Will not show loading icon if link clicked is for the current page
* Supports `ssr` add to bypass client side routing [(b/c)](https://github.com/sveltejs/kit/issues/9390)
* Supports `css` property to pass custom css classes to anchor
* Supports `<slot />` to add anything like svg's or images in the anchor


### ☯️ Install
```bash
pnpm add @sensethenlove/svelte-loading-anchor
```

### 💛 Add custom styling
```scss
.loading-anchor {
  color: green;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
```

### 🧡 Examples
```svelte
<script lang="ts">
  import '$lib/styles.scss'
  import { LoadingAnchor } from '@sensethenlove/svelte-loading-anchor'
</script>

<LoadingAnchor href="/test" label="Test" />

<LoadingAnchor href="/" label="Home" ssr={ true }>
  <svg role="img" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Icon for home page</title><path fill="currentColor" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
</LoadingAnchor>
```

### 💙 Properties
```ts
export let css: string = ''
export let label: string = ''
export let href: string = '/'
export let ssr: boolean = false // does a window.location.href = href https://github.com/sveltejs/kit/issues/9390
export let loadWidth: 'standard' | 'big' | 'huge' = 'standard'
```

### 💖 Our helpful packages!
* [@sensethenlove/jwt](https://www.npmjs.com/package/@sensethenlove/jwt)
* [@sensethenlove/slug](https://www.npmjs.com/package/@sensethenlove/slug)
* [@sensethenlove/toast](https://www.npmjs.com/package/@sensethenlove/toast)
* [@sensethenlove/env-write](https://www.npmjs.com/package/@sensethenlove/env-write)
* [@sensethenlove/global-style](https://www.npmjs.com/package/@sensethenlove/global-style)
* [@sensethenlove/svelte-modal](https://www.npmjs.com/package/@sensethenlove/svelte-modal)
* [@sensethenlove/loop-backwards](https://www.npmjs.com/package/@sensethenlove/loop-backwards)
* [@sensethenlove/svelte-turnstile](https://www.npmjs.com/package/@sensethenlove/svelte-turnstile)
