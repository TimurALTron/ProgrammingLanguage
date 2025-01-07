function skipSpace(string) {
  string = string.replace(/#.*$/gm, "");
  string = string.trim();

  if (string.length === 0) return "";

  return string;
}

export default skipSpace;
