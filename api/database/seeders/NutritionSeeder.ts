import { faker } from '@faker-js/faker'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Nutrition from 'App/Models/Nutrition'
import Person from 'App/Models/Person'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const people = await Person.all()

    // const data = people.map((person) => {
    //   return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    //     .slice(
    //       faker.datatype.number({ min: 0, max: 5 }),
    //       faker.datatype.number({ min: 6, max: 12 })
    //     )
    //     .map((month)=>{
    //       return {
    //         personNormalizedId: person.normalizedI,
    //         weight: faker.datatype.number({ min: 2.3, max: 10.8 }),
    //         height: faker.datatype.number({ min: 48.7, max: 7455 },
    //        zScore1: faker.datatype.number({ min: -3, max: 3 },
    //        zScore2: faker.datatype.number({ min: -3, max: 3 },
    //        zScore3: faker.datatype.number({ min: -3, max: 3 },
    //         month:mont,
    //       }
    //     )
    // })
    // Logger.info(JSON.stringify(data))

    const data = [
      {
        personNormalizedId: '001',
        month: 3,
        weight: 4.55,
        height: 55.5,
        z_score1: -0.37,
        z_score2: -2.64,
        z_score3: -2.95,
      },
      {
        personNormalizedId: '001',
        month: 4,
        weight: 5.18,
        height: 56.5,
        z_score1: -0.45,
        z_score2: -2.28,
        z_score3: -3.52,
      },
      {
        personNormalizedId: '001',
        month: 5,
        weight: 6.53,
        height: 57,
        z_score1: -3.57,
        z_score2: -1.22,
        z_score3: -4.24,
      },
      {
        personNormalizedId: '001',
        month: 6,
        weight: 7.22,
        height: 58,
        z_score1: -4.55,
        z_score2: -0.85,
        z_score3: -4.57,
      },
      {
        personNormalizedId: '001',
        month: 7,
        weight: 7.72,
        height: 59.5,
        z_score1: -3.68,
        z_score2: -0.64,
        z_score3: -4.41,
      },
      {
        personNormalizedId: '002',
        month: 7,
        weight: 6.86,
        height: 68,
        z_score1: -1.63,
        z_score2: -1.6,
        z_score3: -0.55,
      },
      {
        personNormalizedId: '002',
        month: 8,
        weight: 7.35,
        height: 69,
        z_score1: -1.42,
        z_score2: -1.39,
        z_score3: -0.73,
      },
      {
        personNormalizedId: '002',
        month: 9,
        weight: 7.98,
        height: 69.5,
        z_score1: -0.53,
        z_score2: -1.02,
        z_score3: -1.09,
      },
      {
        personNormalizedId: '003',
        month: 2,
        weight: 5.68,
        height: 52.5,
        z_score1: -5.93,
        z_score2: -0.11,
        z_score3: -2.95,
      },
      {
        personNormalizedId: '003',
        month: 3,
        weight: 6.26,
        height: 53.5,
        z_score1: -7.19,
        z_score2: -0.2,
        z_score3: -3.95,
      },
      {
        personNormalizedId: '003',
        month: 4,
        weight: 6.72,
        height: 54,
        z_score1: -6.05,
        z_score2: -0.35,
        z_score3: -4.71,
      },
      {
        personNormalizedId: '003',
        month: 5,
        weight: 7.26,
        height: 55.5,
        z_score1: -6.41,
        z_score2: -0.3,
        z_score3: -4.95,
      },
      {
        personNormalizedId: '004',
        month: 3,
        weight: 5.32,
        height: 60,
        z_score1: -1.15,
        z_score2: -0.79,
        z_score3: -0.1,
      },
      {
        personNormalizedId: '004',
        month: 4,
        weight: 6.11,
        height: 61,
        z_score1: -0.01,
        z_score2: -0.42,
        z_score3: -0.5,
      },
      {
        personNormalizedId: '004',
        month: 5,
        weight: 6.98,
        height: 61.5,
        z_score1: -1.13,
        z_score2: 0,
        z_score3: -1.14,
      },
      {
        personNormalizedId: '004',
        month: 7,
        weight: 7.23,
        height: 62,
        z_score1: -1.38,
        z_score2: -0.09,
        z_score3: -1.68,
      },
      {
        personNormalizedId: '004',
        month: 6,
        weight: 7.86,
        height: 63.5,
        z_score1: -2.32,
        z_score2: -0.32,
        z_score3: -1.65,
      },
      {
        personNormalizedId: '005',
        month: 4,
        weight: 6.02,
        height: 59.5,
        z_score1: -0.81,
        z_score2: -0.54,
        z_score3: -1.18,
      },
      {
        personNormalizedId: '005',
        month: 5,
        weight: 6.5,
        height: 60.5,
        z_score1: -1,
        z_score2: -0.5,
        z_score3: -1.59,
      },
      {
        personNormalizedId: '005',
        month: 6,
        weight: 6.45,
        height: 62,
        z_score1: -0.08,
        z_score2: -1.07,
        z_score3: -1.68,
      },
      {
        personNormalizedId: '005',
        month: 7,
        weight: 6.81,
        height: 63,
        z_score1: -0.35,
        z_score2: -0.99,
        z_score3: -1.87,
      },
      {
        personNormalizedId: '005',
        month: 8,
        weight: 6.7,
        height: 64,
        z_score1: -0.34,
        z_score2: -1.34,
        z_score3: -2.04,
      },
    ]
    await Nutrition.createMany(data)
  }
}
