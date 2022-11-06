import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import NutritionFactory from 'Database/factories/NutritionFactory'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await NutritionFactory.createMany(100)
  }
}
