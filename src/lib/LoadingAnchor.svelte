<script lang="ts">
  import { page } from '$app/stores'
  import { afterNavigate } from '$app/navigation'

  export let css: string = ''
  export let label: string = ''
  export let href: string = '/'
  export let ssr: boolean = false
  export let loadWidth: 'standard' | 'big' | 'huge' = 'standard'

  let isLoading: boolean = false
  afterNavigate(() => isLoading = false)

  function onAnchorlick (e: Event) {
    if ($page.url.href.endsWith(href)) {} // if href is current url do not show loading indicator
    else if (ssr) { // https://github.com/sveltejs/kit/issues/9390
      e.preventDefault()
      isLoading = true
      window.location.href = href
    } else { // client side render to a new href
      isLoading = true
    }
  }
</script>


<a { href } class="{ css } loading-anchor { isLoading ? 'loading-anchor--is-loading' : '' } loading-anchor--loading-size-{ loadWidth }" on:click={ onAnchorlick }>
  <slot/>
  <span class="loading-anchor__label">{ label }</span>
  <svg role="img" class="loading-anchor__loading-icon" viewBox="0 0 24 24"><title>Loading Icon</title><circle cx="12" cy="2" r="0" fill="#888888"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle></svg>
</a>


<style lang="scss">
  .loading-anchor {
    position: relative;
    display: inline-block;
    &.loading-anchor--is-loading {
      cursor: default;
      pointer-events: none;

      :global(*) {
        opacity: 0;
      }

      .loading-anchor__loading-icon,
      .loading-anchor__loading-icon * {
        opacity: 1;
        z-index: 0;
      }
    }
    &.loading-anchor--loading-size-standard {
      .loading-anchor__loading-icon {
        width: 1.8rem;
        margin-top: -0.9rem;
        margin-left: -0.9rem;
      }
    }
    &.loading-anchor--loading-size-big {
      .loading-anchor__loading-icon {
        width: 2.7rem;
        margin-top: -1.35rem;
        margin-left: -1.35rem;
      }
    }
    &.loading-anchor--loading-size-huge {
      .loading-anchor__loading-icon {
        width: 3.6rem;
        margin-top: -1.8rem;
        margin-left: -1.8rem;
      }
    }

    :global(*) {
      transition: all 0.3s;
    }

    &__loading-icon {
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      opacity: 0;
    }
  }
</style>
