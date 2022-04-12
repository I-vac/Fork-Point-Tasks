let words = ["banan", "portokal", "april", "domat", "rabota", 14];

const capitalize = (words) =>
  new Promise((resolve, reject) => {
    if (words.every((word) => typeof word === "string")) {
      resolve(words.map((word) => word.toUpperCase()));
    } else {
      reject(Error("the array should be only of elements that are strings"));
    }
  });

const sortWords = (words) => {
  return words.sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });
};

capitalize(words)
  .then((words) => sortWords(words))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
