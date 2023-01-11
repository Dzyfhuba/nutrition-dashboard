import { afterCreate, BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Nutrition from './Nutrition'

const pad = (n: number, length: number) => {
  var len = length - ('' + n).length
  return (len > 0 ? new Array(++len).join('0') : '') + n
}

export default class Person extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @afterCreate()
  public static async generate(person: Person) {
    person.normalizedId = pad(person.id, 3)
    await person.save()
  }

  @column()
  public normalizedId: string

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Nutrition)
  public nutritions: HasMany<typeof Nutrition>
}
