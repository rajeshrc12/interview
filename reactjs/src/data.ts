import { faker } from "@faker-js/faker";

const THRESHOLD = 10000;

export const users = Array.from(Array(THRESHOLD), () => {
  return {
    id: faker.string.uuid(),
    name: faker.internet.username(),
    avatar: faker.image.avatar(),
  };
});
