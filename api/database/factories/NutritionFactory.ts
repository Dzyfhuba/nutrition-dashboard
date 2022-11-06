import Nutrition from 'App/Models/Nutrition'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Nutrition, ({ faker }) => {
  const gender = faker.datatype.boolean()

  let medianAgeWeight = 0
  let height = 0
  let weight = 0
  const age = faker.datatype.number({
    min: 0,
    max: 12,
  })

  if (gender) {
    const type = [3.3, 4.5, 5.6, 6.4, 7.0, 7.5, 7.9, 8.3, 8.6, 8.9, 9.2, 9.4, 9.6]
    medianAgeWeight = faker.datatype.float({
      min: 3.3,
      max: 8.9,
    })
  } else {
    const type = [3.2, 4.2, 5.1, 5.8, 6.4, 6.9, 7.3, 7.6, 7.9, 8.2, 8.5, 8.7, 8.9]
    medianAgeWeight = faker.datatype.float({
      min: 3.2,
      max: 8.9,
    })
  }
  const type = ['BB/TB', 'BB/U', 'TB/U']
  const random = Math.floor(Math.random() * type.length)
  const category = type[random]

  let zScore = 0

  return {
    //
  }
}).build()
