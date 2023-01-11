import { faker } from '@faker-js/faker'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Nutrition from 'App/Models/Nutrition'
import Person from 'App/Models/Person'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const people = await Person.all()

    const data = people.map((person) => {
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        .slice(
          faker.datatype.number({ min: 0, max: 5 }),
          faker.datatype.number({ min: 6, max: 12 })
        )
        .map((month) => {
          return {
            personNormalizedId: person.normalizedId,
            weight: faker.datatype.number({ min: 2.3, max: 10.8 }),
            height: faker.datatype.number({ min: 48.7, max: 74.55 }),
            zScore1: faker.datatype.number({ min: -3, max: 3 }),
            zScore2: faker.datatype.number({ min: -3, max: 3 }),
            zScore3: faker.datatype.number({ min: -3, max: 3 }),
            month: month,
          }
        })
    })
    // Logger.info(JSON.stringify(data))
    await Nutrition.createMany(data.flat())
  }
}
