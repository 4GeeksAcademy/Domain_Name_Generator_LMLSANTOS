let generateRandomDomain = () => {
  let pronoun = ['the','our', 'his', 'her', 'ours', 'theirs', 'their'];
  let adj = ['great', 'big', 'Small', 'Magnificient', 'Awesome' ];
  let noun = ['jogger','racoon', 'Honor', 'Pack', 'ocean', 'godfather', 'player'];
  let extension =['com', 'net', 'pt', 'es', 'us', 'io'];

  let domainNames = [];

  for (let i=0; i<pronoun.length; i++){
    for (let j=0; j<adj.length; j++){
      for (let k=0; k<noun.length; k++){
        for (let l=0; l<extension.length; l++){
          const domainName = `${pronoun[i]}${adj[j]}${noun[k]}.${extension[l]}`;
          domainNames.push(domainName);
        }
      }
    }
  }
  const randomIndex = Math.floor(Math.random()*domainNames.length);
  return domainNames[randomIndex];
};
console.log(generateRandomDomain());