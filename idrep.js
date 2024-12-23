function rollingHash(text, windowSize) {
  let hash = 0;
  for (let i = 0; i < windowSize; i++) {
    hash += text.charCodeAt(i);
  }

  const hashes = [hash];
  for (let i = windowSize; i < text.length; i++) {
    hash -= text.charCodeAt(i - windowSize);
    hash += text.charCodeAt(i);
    hashes.push(hash);
  }

  return hashes;
}

const text = "This is an example text.";
const windowSize = 5;
const hashes = rollingHash(text, windowSize);
console.log(hashes);
