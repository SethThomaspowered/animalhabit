export type Habitat = 'land' | 'water' | 'air' | 'amphibious';

export interface Animal {
  id: string;
  name: string;
  image: string;
  habitat: Habitat;
  description: string;
}

export interface AnimalSet {
  id: string;
  animals: Animal[];
}

export interface GameState {
  currentRound: number;
  totalRounds: number;
  score: number;
  currentSet: AnimalSet | null;
  gameStatus: 'intro' | 'playing' | 'feedback' | 'completed';
  selectedAnimalId: string | null;
  sets: AnimalSet[];
}