import Person from 'App/Models/Person'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Person, ({ faker }) => {
  return {
    name: faker.name.fullName(),
  }
}).build()
