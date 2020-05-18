// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getConfig() {
  const res = {
    root: "./guidelines",
    dist: "./dist",
    examples: {
      root: "./src/examples",
    },
    templates: {
      root: "src/templates",
      partials: "src/templates/partials",
    },
    site: {
      name: "Api Guidelines",
    },
    markdown: {
      blocks: {
        tip: {
          tag: "div",
          class: "api-custom-container api-custom-container--tip",
        },
        warning: {
          tag: "div",
          class: "api-custom-container api-custom-container--warning",
        },
        danger: {
          tag: "div",
          class: "api-custom-container api-custom-container--danger",
        },
        details: {
          tag: "details",
          class: "api-custom-container api-custom-container--details",
        },
      },
    },
  };
  return res;
}
