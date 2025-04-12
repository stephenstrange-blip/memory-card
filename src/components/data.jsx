const heroes = ['baxia', 'cici', 'floryn', 'hylos', 'kadita', 'kagura', 'kalea', 'karina', 'lapu', 'masha', 'minotaur', 'suyou', 'valentina', 'vexana']

export let data = () => heroes.map(name => {
  return {
    name, 
    url: `src/assets/heroes/${name}.png`
  }}
)


