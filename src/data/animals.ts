import { Animal, AnimalSet } from '../types';

export const animals: Animal[] = [
  {
    id: '1',
    name: 'African Elephant',
    image: 'https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'land',
    description: 'The largest land mammal on Earth, known for their long trunks and large ears.'
  },
  {
    id: '2',
    name: 'Bottlenose Dolphin',
    image: 'https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'water',
    description: 'Highly intelligent marine mammals known for their playful behavior and communication skills.'
  },
  {
    id: '3',
    name: 'Golden Eagle',
    image: 'https://images.pexels.com/photos/53581/bald-eagle-eagle-bird-birds-of-prey-53581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'air',
    description: 'One of the fastest birds, capable of diving at speeds over 150 mph.'
  },
  {
    id: '4',
    name: 'American Bullfrog',
    image: 'https://images.pexels.com/photos/45863/frog-bull-frog-amphibian-green-45863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'amphibious',
    description: 'Lives both in water and on land, known for their distinctive deep calls.'
  },
  {
    id: '5',
    name: 'Bengal Tiger',
    image: 'https://images.pexels.com/photos/3498323/pexels-photo-3498323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'land',
    description: 'The largest cat species, known for their orange coat with black stripes.'
  },
  {
    id: '6',
    name: 'Great White Shark',
    image: 'https://images.pexels.com/photos/12861821/pexels-photo-12861821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'water',
    description: 'A large predatory fish with a distinctive body shape, known for their powerful bite.'
  },
  {
    id: '7',
    name: 'Arctic Tern',
    image: 'https://images.pexels.com/photos/3689732/pexels-photo-3689732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'air',
    description: 'Holds the record for the longest migration of any animal, flying from the Arctic to the Antarctic and back each year.'
  },
  {
    id: '8',
    name: 'Saltwater Crocodile',
    image: 'https://images.pexels.com/photos/60644/nile-crocodile-crocodylus-niloticus-zoo-60644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'amphibious',
    description: 'The largest living reptile, spends time both in water and on land.'
  },
  {
    id: '9',
    name: 'Giraffe',
    image: 'https://images.pexels.com/photos/16056383/pexels-photo-16056383/free-photo-of-close-up-of-a-giraffe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'land',
    description: 'The tallest land animal with extremely long necks to reach leaves in tall trees.'
  },
  {
    id: '10',
    name: 'Blue Whale',
    image: 'https://images.pexels.com/photos/3309869/pexels-photo-3309869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'water',
    description: 'The largest animal to have ever existed on Earth, can grow up to 100 feet long.'
  },
  {
    id: '11',
    name: 'Peregrine Falcon',
    image: 'https://images.pexels.com/photos/8894394/pexels-photo-8894394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'air',
    description: 'The fastest bird and animal on the planet, reaching speeds over 240 mph during hunting dives.'
  },
  {
    id: '12',
    name: 'Red-Eyed Tree Frog',
    image: 'https://images.pexels.com/photos/35435/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'amphibious',
    description: 'Known for their vibrant green bodies and red eyes, they live in rainforest trees.'
  },
  {
    id: '13',
    name: 'Red Fox',
    image: 'https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'land',
    description: 'Adaptable mammals known for their reddish fur and bushy tails.'
  },
  {
    id: '14',
    name: 'Octopus',
    image: 'https://images.pexels.com/photos/3865034/pexels-photo-3865034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'water',
    description: 'Highly intelligent marine animals with eight arms and excellent problem-solving abilities.'
  },
  {
    id: '15',
    name: 'Bald Eagle',
    image: 'https://images.pexels.com/photos/8826354/pexels-photo-8826354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'air',
    description: 'A large bird of prey with a distinctive white head, a symbol of the United States.'
  },
  {
    id: '16',
    name: 'Axolotl',
    image: 'https://images.pexels.com/photos/5943669/pexels-photo-5943669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    habitat: 'amphibious',
    description: 'A unique salamander that retains its juvenile features throughout its life.'
  }
];

// Create sets of 4 animals, with one from each habitat type
export const generateAnimalSets = (numSets: number): AnimalSet[] => {
  const sets: AnimalSet[] = [];
  
  const landAnimals = animals.filter(animal => animal.habitat === 'land');
  const waterAnimals = animals.filter(animal => animal.habitat === 'water');
  const airAnimals = animals.filter(animal => animal.habitat === 'air');
  const amphibiousAnimals = animals.filter(animal => animal.habitat === 'amphibious');
  
  for (let i = 0; i < numSets; i++) {
    // Pick one animal from each habitat type
    const landAnimal = landAnimals[i % landAnimals.length];
    const waterAnimal = waterAnimals[i % waterAnimals.length];
    const airAnimal = airAnimals[i % airAnimals.length];
    const amphibiousAnimal = amphibiousAnimals[i % amphibiousAnimals.length];
    
    // Shuffle the 4 animals
    const setAnimals = [landAnimal, waterAnimal, airAnimal, amphibiousAnimal]
      .sort(() => Math.random() - 0.5);
    
    sets.push({
      id: `set-${i + 1}`,
      animals: setAnimals
    });
  }
  
  return sets;
};