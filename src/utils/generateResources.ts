export default function generateResources(townType: string) {
  let resources;

  switch (townType) {
    case "Elysium town":
      return (resources = {
        wood: {
          amount: 100,
          perHour: 0,
        },

        food: {
          amount: 200,
          perHour: 3,
        },

        water: {
          amount: 200,
          perHour: 3,
        },

        stone: {
          amount: 50,
          perHour: 0,
        },

        metal: {
          amount: 0,
          perHour: 0,
        },

        clay: {
          amount: 50,
          perHour: 1,
        },

        sand: {
          amount: 0,
          perHour: 1,
        },
      });
    case "Hills town":
      return (resources = {
        wood: {
          amount: 100,
          perHour: 1,
        },

        food: {
          amount: 100,
          perHour: 1,
        },

        water: {
          amount: 100,
          perHour: 1,
        },

        stone: {
          amount: 50,
          perHour: 1,
        },

        metal: {
          amount: 0,
          perHour: 0,
        },

        clay: {
          amount: 0,
          perHour: 0,
        },

        sand: {
          amount: 0,
          perHour: 0,
        },
      });
    case "Lake town":
      return (resources = {
        wood: {
          amount: 100,
          perHour: 0,
        },

        food: {
          amount: 100,
          perHour: 1,
        },

        water: {
          amount: 300,
          perHour: 3,
        },

        stone: {
          amount: 0,
          perHour: 0,
        },

        metal: {
          amount: 0,
          perHour: 0,
        },

        clay: {
          amount: 50,
          perHour: 1,
        },

        sand: {
          amount: 0,
          perHour: 0,
        },
      });
    case "Jungle town":
      return (resources = {
        wood: {
          amount: 400,
          perHour: 3,
        },

        food: {
          amount: 100,
          perHour: 1,
        },

        water: {
          amount: 100,
          perHour: 1,
        },

        stone: {
          amount: 0,
          perHour: 0,
        },

        metal: {
          amount: 0,
          perHour: 0,
        },

        clay: {
          amount: 0,
          perHour: 0,
        },

        sand: {
          amount: 0,
          perHour: 0,
        },
      });
    case "Caverns town":
      return (resources = {
        wood: {
          amount: 50,
          perHour: 0,
        },

        food: {
          amount: 100,
          perHour: 0,
        },

        water: {
          amount: 100,
          perHour: 0,
        },

        stone: {
          amount: 400,
          perHour: 3,
        },

        metal: {
          amount: 50,
          perHour: 1,
        },

        clay: {
          amount: 50,
          perHour: 0,
        },

        sand: {
          amount: 50,
          perHour: 0,
        },
      });
    case "Dune town":
      return (resources = {
        wood: {
          amount: 0,
          perHour: 0,
        },

        food: {
          amount: 100,
          perHour: 1,
        },

        water: {
          amount: 100,
          perHour: 1,
        },

        stone: {
          amount: 50,
          perHour: 0,
        },

        metal: {
          amount: 0,
          perHour: 0,
        },

        clay: {
          amount: 50,
          perHour: 0,
        },

        sand: {
          amount: 400,
          perHour: 4,
        },
      });
    case "Wasteland town":
      return (resources = {
        wood: {
          amount: 50,
          perHour: 0,
        },

        food: {
          amount: 50,
          perHour: 0,
        },

        water: {
          amount: 50,
          perHour: 0,
        },

        stone: {
          amount: 100,
          perHour: 1,
        },

        metal: {
          amount: 0,
          perHour: 0,
        },

        clay: {
          amount: 400,
          perHour: 4,
        },

        sand: {
          amount: 100,
          perHour: 1,
        },
      });
    case "Volcano town":
      return (resources = {
        wood: {
          amount: 0,
          perHour: 0,
        },

        food: {
          amount: 50,
          perHour: 0,
        },

        water: {
          amount: 50,
          perHour: 0,
        },

        stone: {
          amount: 200,
          perHour: 2,
        },

        metal: {
          amount: 400,
          perHour: 4,
        },

        clay: {
          amount: 0,
          perHour: 0,
        },

        sand: {
          amount: 0,
          perHour: 0,
        },
      });
  }

  return resources;
}
