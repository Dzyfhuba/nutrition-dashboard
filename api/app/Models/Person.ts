import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { nanoid } from 'nanoid'
import Nutrition from './Nutrition'

export default class Person extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @beforeCreate()
  public static generateId(person: Person) {
    person.id = nanoid()
  }

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Nutrition)
  public nutritions: HasMany<typeof Nutrition>
}
