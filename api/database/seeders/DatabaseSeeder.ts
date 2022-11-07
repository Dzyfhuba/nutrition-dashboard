import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PersonFactory from 'Database/factories/PersonFactory'
import NutritionSeeder from './NutritionSeeder'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await PersonFactory.createMany(100)
    await new NutritionSeeder(this.client).run()
  }
}
