function countLonelyLetters(text) {
  let captured = text.toLowerCase();
  captured = captured.replace(/[^a-z]/g, "");
​
  const counts = {};
  for (const char of captured) {
    counts[char] = (counts[char] || 0) + 1;
  }
​
  let lonely = 0;
  for (const [letter, count] of Object.entries(counts)) {
    if (count === 1) {
      const code = letter.charCodeAt(0);
      const prevAbsent = letter === 'a' || !(String.fromCharCode(code - 1) in counts);
      const nextAbsent = letter === 'z' || !(String.fromCharCode(code + 1) in counts);
      if (prevAbsent && nextAbsent) lonely++;
    }
  }
​
  return lonely;
}