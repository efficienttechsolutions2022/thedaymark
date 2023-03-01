export const from = (valueX = 0, valueY = 0) => ({
  yPercent: valueY,
  xPercent: valueX,
  immediateRender: false,
});

export const to = (valueX = 0, valueY = 0) => ({
  yPercent: valueY,
  xPercent: valueX,
});

export const toStagger = (valueX = 0, valueY = 0, stagger = 0) => ({
  yPercent: valueY,
  xPercent: valueX,
  stagger: {
    each: stagger,
  },
});
