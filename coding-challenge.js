const convertTitleCase = (title) => {
  const exception = ["a", "an", "the", "but", "or", "on", "in", "with"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exception.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    );

  return titleCase;
};

console.log(convertTitleCase("this is a nice title"));
