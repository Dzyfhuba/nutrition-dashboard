import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { faker } from '@faker-js/faker'
import Person from 'App/Models/Person'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Person.createMany(
      [1, 2, 3, 4, 5].map(() => {
        return {
          name: faker.lorem.word(),
        }
      })
    )
  }
}
