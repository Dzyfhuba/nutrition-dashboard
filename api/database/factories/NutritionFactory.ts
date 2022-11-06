import Nutrition from 'App/Models/Nutrition'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Nutrition, ({ faker }) => {
  return {
    name: faker.name.fullName(),
    gender: faker.datatype.boolean() ? 'L' : 'P',
    month: faker.datatype.number({ min: 0, max: 12 }),
    height: faker.datatype.float({ min: 3.2, max: 10.8 }),
    weight: faker.datatype.float({ min: 48.7, max: 74.55 }),
    z_score: faker.datatype.number({ min: -3, max: 3 }),
    category: ['BB/TB', 'BB/U', 'TB/U'][Math.floor(Math.random() * 3)],
  }
}).build()
