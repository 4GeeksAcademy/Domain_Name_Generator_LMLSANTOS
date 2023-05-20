let generateRandomDomain = () => {
  let pronoun = ["the", "our", "his", "her", "ours", "theirs", "their"];
  let adj = ["great", "big", "Small", "Magnificient", "Awesome"];
  let noun = [
    "jogger",
    "racoon",
    "Honor",
    "Pack",
    "ocean",
    "godfather",
    "player"
  ];
  let extension = ["com", "net", "pt", "es", "us", "io"];

  return (
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    adj[Math.floor(Math.random() * adj.lengt)] +
    noun[Math.floor(Math.random() * noun.length)] +
    "." +
    extension[Math.floor(Math.random() * extension.length)]
  );
};
console.log(generateRandomDomain());
