import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { faker } from '@faker-js/faker'
import Person from 'App/Models/Person'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    // await Person.createMany(
    //   [1, 2, 3, 4, 5].map(() => {
    //     return {
    //       name: faker.lorem.word(),
    //     }
    //   })
    // )

    const data = [
      {
        name: 'Ryan',
        created_at: '2023-01-05 05:01:50',
        updated_at: '2023-01-05 05:01:50',
      },
      {
        name: 'Ilham',
        created_at: '2023-01-05 05:01:50',
        updated_at: '2023-01-05 05:01:50',
      },
      {
        name: 'Raisa',
        created_at: '2023-01-05 05:01:50',
        updated_at: '2023-01-05 05:01:50',
      },
      {
        name: 'Ajay',
        created_at: '2023-01-05 05:01:50',
        updated_at: '2023-01-05 05:01:50',
      },
      {
        name: 'Aini',
        created_at: '2023-01-05 05:01:50',
        updated_at: '2023-01-05 05:01:50',
      },
    ]

    await Person.createMany(data)
  }
}
