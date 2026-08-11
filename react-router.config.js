export default {
  // Disable SSR for static SPA output suitable for GitHub Pages deployment
  ssr: false,
  basename: "/portfolio/",
  // Opt into v8 future flags to suppress warnings and ensure smooth upgrade
  future: {
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_viteEnvironmentApi: true,
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: true,
  },
};
