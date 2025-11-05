import type { Field } from "../types/fieldTypes";
import type { Town } from "../types/townTypes";

export default function createMap() {
  const fields = [];

  let hauntedForestCount = 0;
  let volcanoCount = 0;
  let elysiumCount = 0;

  const generateNewField = (j: number, i: number, fieldType: string) => {
    const newField: Field | Town = {
      id: `x:${j} y:${i}`,
      coordinates: { x: j, y: i },
      type: fieldType,
      owner: "Nature",
    };

    return newField;
  };

  for (let i = 0; i <= 7; i++) {
    const row = [];

    for (let j = 0; j <= 7; j++) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;

      if (randomNumber === 1) {
        if (hauntedForestCount < 1) {
          const newField = generateNewField(j, i, "Hollow Grove");
          row.push(newField);
          hauntedForestCount = 1;
        } else {
          const newField = generateNewField(j, i, "Forest");
          row.push(newField);
        }
      } else if (randomNumber === 2) {
        const oneTwo = Math.floor(Math.random() * 2) + 1;

        if (oneTwo === 1) {
          if (volcanoCount < 1) {
            const newField = generateNewField(j, i, "Volcano");
            row.push(newField);

            volcanoCount = 1;
          } else {
            const newField = generateNewField(j, i, "Caverns");
            row.push(newField);
          }
        } else {
          if (elysiumCount < 1) {
            const newField = generateNewField(j, i, "Elysium");
            row.push(newField);

            elysiumCount = 1;
          } else {
            const newField = generateNewField(j, i, "Grassland");
            row.push(newField);
          }
        }
      } else if (randomNumber <= 10 && randomNumber > 2) {
        const newField = generateNewField(j, i, "Caverns");
        row.push(newField);
      } else if (randomNumber <= 20 && randomNumber > 10) {
        const newField = generateNewField(j, i, "Grassland");
        row.push(newField);
      } else if (randomNumber <= 30 && randomNumber > 20) {
        const newField = generateNewField(j, i, "Wasteland");
        row.push(newField);
      } else if (randomNumber <= 45 && randomNumber > 30) {
        const newField = generateNewField(j, i, "Desert");
        row.push(newField);
      } else if (randomNumber <= 50 && randomNumber > 45) {
        const newField = generateNewField(j, i, "Jungle");
        row.push(newField);
      } else if (randomNumber <= 60 && randomNumber > 50) {
        const newField = generateNewField(j, i, "Forest");
        row.push(newField);
      } else if (randomNumber <= 70 && randomNumber > 60) {
        const newField = generateNewField(j, i, "Lake");
        row.push(newField);
      } else if (randomNumber <= 100 && randomNumber > 70) {
        const newField = generateNewField(j, i, "Hills");
        row.push(newField);
      }
    }

    fields.push(row);
  }

  let x = Math.floor(Math.random() * 8) + 1;
  let y = Math.floor(Math.random() * 8) + 1;

  console.log(fields[y - 1][x - 1]);

  const capital = {
    id: fields[y - 1][x - 1].id,
    name: "Capital City",
    type: "Hills Town",
    coordinates: {
      x: fields[y - 1][x - 1].coordinates.x,
      y: fields[y - 1][x - 1].coordinates.y,
    },
    status: "megalopolis",
    isCapital: true,
    owner: "Player123",

    buildings: {
      production: [
        {
          buildingName: "name",
          level: 0,
          productionBonus: 0,
        },

        {
          buildingName: "name",
          level: 0,
          productionBonus: 0,
        },

        {
          buildingName: "name",
          level: 0,
          productionBonus: 0,
        },
        {
          buildingName: "name",
          level: 0,
          productionBonus: 0,
        },

        {
          buildingName: "name",
          level: 0,
          productionBonus: 0,
        },

        {
          buildingName: "name",
          level: 0,
          productionBonus: 0,
        },

        {
          buildingName: "name",
          level: 0,
          productionBonus: 0,
        },
      ],

      baracks: {
        buildingName: "name",
        level: 0,
        productionBonus: 0,
      },

      tradeStation: {
        buildingName: "name",
        level: 0,
        traders: 0,

        tradeRouts: {
          route1: {
            senderId: null,
            receiverId: null,
          },

          route2: {
            senderId: null,
            receiverId: null,
          },

          route3: {
            senderId: null,
            receiverId: null,
          },
        },
      },
    },

    resources: {
      wood: {
        amount: 1,
        perHour: 0,
      },

      food: {
        amount: 1,
        perHour: 0,
      },

      water: {
        amount: 1,
        perHour: 0,
      },

      stone: {
        amount: 1,
        perHour: 0,
      },

      metal: {
        amount: 1,
        perHour: 0,
      },

      clay: {
        amount: 1,
        perHour: 0,
      },

      sand: {
        amount: 1,
        perHour: 0,
      },
    },
  };

  fields[y - 1][x - 1] = capital;

  const towns: any = [];
  towns.push(capital);

  console.log(fields[y - 1][x - 1], towns);

  return fields;
}
