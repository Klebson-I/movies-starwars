# Endpoints documentation

### Single documents are accessible by it's id in API not by id given by database

# Film

Film object:

{
  id: ObjectId;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;
}

### Allowed methods:
#### GET
### Allowed paths:
#### /film
Return array of films objects
#### /film:id
Return film object
#### /film/people
Return single string or array of most often occured names in film openings

Example: 'Luke' or ['Luke', 'Dooku']

#### /film/word
Return array of arrays that contains word and its occurance times in film openings

Example: [['it', 3], ['hello', 5], ['jedi', 10]]

# Planet

Planet object:

{
  id: ObjectId;
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
}

### Allowed methods:
#### GET
### Allowed paths:
#### /planet
Return array of planets objects
#### /planet:id
Return planet object

# Species

Species object:

{
  id: ObjectId;
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: string;
  people: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
}

### Allowed methods:
#### GET
### Allowed paths:
#### /species
Return array of species objects
#### /species:id
Return species object

# Starships

Starship object:

{
  id: ObjectId;
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  created: string;
  edited: string;
}

### Allowed methods:
#### GET
### Allowed paths:
#### /starship
Return array of starship objects
#### /starship:id
Return starship object

# Vehicles

Vehicle object:

{
  id: ObjectId;
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  created: string;
  edited: string;
}

### Allowed methods:
#### GET
### Allowed paths:
#### /vehicle
Return array of vehicles object
#### /vehicle:id
Return vehicle object