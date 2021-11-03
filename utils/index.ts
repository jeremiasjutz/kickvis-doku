const nameToSlug = (inputString: string) => {
  const components = inputString.split(' ');
  const slug = components
    .map((part) =>
      part
        .toLocaleLowerCase()
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/&|\/|-|\(|\)|"/g, '')
    )
    .join('-')
    .replace(/--/g, '-');
  return slug;
};

export { nameToSlug };
