import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PersonFactory from 'Database/factories/PersonFactory'
import NutritionSeeder from './NutritionSeeder'
import PersonSeeder from './PersonSeeder'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await new PersonSeeder(this.client).run()
    // await PersonFactory.createMany(5)
    await new NutritionSeeder(this.client).run()
  }
}
