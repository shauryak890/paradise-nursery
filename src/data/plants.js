const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

export const categories = [
  {
    id: 'easy-care',
    name: 'Easy-care favourites',
    description: 'Low-fuss greenery for busy days and first-time plant parents.',
    plants: [
      { id: 'snake-plant', name: 'Snake Plant', price: 18, image: photo('photo-1593482892290-f54927ae2b0b'), description: 'Sculptural upright leaves that suit bright or low-light corners.' },
      { id: 'zz-plant', name: 'ZZ Plant', price: 22, image: photo('photo-1632207691143-643e2a7a4c39'), description: 'Glossy leaves and a relaxed watering routine.' },
      { id: 'pothos', name: 'Golden Pothos', price: 14, image: photo('photo-1614594975525-e45190c55d0b'), description: 'Trailing heart-shaped leaves for shelves and hanging pots.' },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 28, image: photo('photo-1501004318641-b39e6451bec6'), description: 'Bold, deep-green foliage with a modern silhouette.' },
      { id: 'spider-plant', name: 'Spider Plant', price: 16, image: photo('photo-1572688484438-313a6e50c333'), description: 'Arching striped leaves bring movement to a room.' },
      { id: 'jade-plant', name: 'Jade Plant', price: 19, image: photo('photo-1509423350716-97f9360b4e09'), description: 'A compact succulent with plump, glossy leaves.' }
    ]
  },
  {
    id: 'statement-plants',
    name: 'Statement plants',
    description: 'Eye-catching shapes and lush foliage that make a room feel alive.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 35, image: photo('photo-1614594975525-e45190c55d0b'), description: 'Iconic split leaves with a tropical, oversized look.' },
      { id: 'bird-paradise', name: 'Bird of Paradise', price: 49, image: photo('photo-1597055181300-a8b4be4f4d4a'), description: 'A dramatic upright plant for open, sunny spaces.' },
      { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', price: 42, image: photo('photo-1509423350716-97f9360b4e09'), description: 'Large violin-shaped leaves create a striking focal point.' },
      { id: 'areca-palm', name: 'Areca Palm', price: 38, image: photo('photo-1512428813834-c702c7702b78'), description: 'Feathery fronds add a soft, resort-like feeling.' },
      { id: 'calathea', name: 'Calathea Orbifolia', price: 32, image: photo('photo-1593691509543-c55fb32e5cee'), description: 'Rounded leaves with silvery-green stripes.' },
      { id: 'alocasia', name: 'Alocasia Polly', price: 31, image: photo('photo-1597055181300-a8b4be4f4d4a'), description: 'Arrow-shaped leaves with dramatic pale veins.' }
    ]
  },
  {
    id: 'pet-friendly',
    name: 'Pet-conscious picks',
    description: 'Lovely leafy options selected for homes with curious companions.',
    plants: [
      { id: 'parlor-palm', name: 'Parlor Palm', price: 24, image: photo('photo-1512428813834-c702c7702b78'), description: 'A graceful palm that is happy in indirect light.' },
      { id: 'boston-fern', name: 'Boston Fern', price: 21, image: photo('photo-1597055181300-a8b4be4f4d4a'), description: 'Soft, arching fronds love a little extra humidity.' },
      { id: 'peperomia', name: 'Peperomia Green', price: 17, image: photo('photo-1485955900006-10f4d324d411'), description: 'Compact, textured foliage for desks and small shelves.' },
      { id: 'prayer-plant', name: 'Prayer Plant', price: 23, image: photo('photo-1593691509543-c55fb32e5cee'), description: 'Patterned leaves fold slightly upward in the evening.' },
      { id: 'ponytail-palm', name: 'Ponytail Palm', price: 27, image: photo('photo-1501004318641-b39e6451bec6'), description: 'A playful sculptural plant with a bulbous trunk.' },
      { id: 'haworthia', name: 'Haworthia', price: 13, image: photo('photo-1509423350716-97f9360b4e09'), description: 'A small rosette succulent for a bright windowsill.' }
    ]
  }
];

export const allPlants = categories.flatMap((category) =>
  category.plants.map((plant) => ({ ...plant, category: category.name }))
);