<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<style>
  body {
  background: var(--accent);
  background: rgb(245,245,245);
  background: linear-gradient(52deg, rgba(245,245,245,1) 0%, rgba(249,239,255,1) 100%);
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Bebas Neue', cursive;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
