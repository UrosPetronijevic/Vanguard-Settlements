export default function generateResources(townType: string) {
  let resources;

  switch (townType) {
    case "Elysium town":
      return (resources = {
        wood: {
          amount: 100,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        food: {
          amount: 200,
          perHour: 3,
          percentAdd: 0,
          percentSub: 0,
        },

        water: {
          amount: 200,
          perHour: 3,
          percentAdd: 0,
          percentSub: 0,
        },

        stone: {
          amount: 50,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        metal: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        clay: {
          amount: 50,
          perHour: 1,
          percentAdd: 0,
          percentSub: 0,
        },

        sand: {
          amount: 0,
          perHour: 1,
          percentAdd: 0,
          percentSub: 0,
        },
      });
    case "Hills town":
      return (resources = {
        wood: {
          amount: 100,
          perHour: 1,
          percentAdd: 0,
          percentSub: 0,
        },

        food: {
          amount: 100,
          perHour: 1,
          percentAdd: 0,
          percentSub: 0,
        },

        water: {
          amount: 100,
          perHour: 1,
          percentAdd: 0,
          percentSub: 0,
        },

        stone: {
          amount: 50,
          perHour: 1,
          percentAdd: 0,
          percentSub: 0,
        },

        metal: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        clay: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        sand: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },
      });
    case "Lake town":
      return (resources = {
        wood: {
          amount: 100,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        food: {
          amount: 100,
          perHour: 1,
          percentAdd: 0,
          percentSub: 0,
        },

        water: {
          amount: 300,
          perHour: 3,
          percentAdd: 0,
          percentSub: 0,
        },

        stone: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        metal: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        clay: {
          amount: 50,
          perHour: 1,
          percentAdd: 0,
          percentSub: 0,
        },

        sand: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },
      });
    case "Jungle town":
      return (resources = {
        wood: {
          amount: 400,
          perHour: 3,
          percentAdd: 0,
          percentSub: 0,
        },

        food: {
          amount: 100,
          perHour: 1,
          percentAdd: 0,
          percentSub: 0,
        },

        water: {
          amount: 100,
          perHour: 1,
          percentAdd: 0,
          percentSub: 0,
        },

        stone: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        metal: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        clay: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        sand: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },
      });
    case "Caverns town":
      return (resources = {
        wood: {
          amount: 50,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        food: {
          amount: 100,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        water: {
          amount: 100,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        stone: {
          amount: 400,
          perHour: 3,
          percentAdd: 0,
          percentSub: 0,
        },

        metal: {
          amount: 50,
          perHour: 1,
          percentAdd: 0,
          percentSub: 0,
        },

        clay: {
          amount: 50,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        sand: {
          amount: 50,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },
      });
    case "Dune town":
      return (resources = {
        wood: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        food: {
          amount: 100,
          perHour: 1,
          percentAdd: 0,
          percentSub: 0,
        },

        water: {
          amount: 100,
          perHour: 1,
          percentAdd: 0,
          percentSub: 0,
        },

        stone: {
          amount: 50,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        metal: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        clay: {
          amount: 50,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        sand: {
          amount: 400,
          perHour: 4,
          percentAdd: 0,
          percentSub: 0,
        },
      });
    case "Wasteland town":
      return (resources = {
        wood: {
          amount: 50,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        food: {
          amount: 50,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        water: {
          amount: 50,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        stone: {
          amount: 100,
          perHour: 1,
          percentAdd: 0,
          percentSub: 0,
        },

        metal: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        clay: {
          amount: 400,
          perHour: 4,
          percentAdd: 0,
          percentSub: 0,
        },

        sand: {
          amount: 100,
          perHour: 1,
          percentAdd: 0,
          percentSub: 0,
        },
      });
    case "Volcano town":
      return (resources = {
        wood: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        food: {
          amount: 50,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        water: {
          amount: 50,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        stone: {
          amount: 200,
          perHour: 2,
          percentAdd: 0,
          percentSub: 0,
        },

        metal: {
          amount: 400,
          perHour: 4,
          percentAdd: 0,
          percentSub: 0,
        },

        clay: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },

        sand: {
          amount: 0,
          perHour: 0,
          percentAdd: 0,
          percentSub: 0,
        },
      });
  }

  return resources;
}
