function cx(from, style = {}) {
  return Object.keys(style).reduce((pv, cv) => {
    if (style[cv]) return `${pv}${from[cv]} `;
    return pv;
  }, '');
}

export {
  cx,
};