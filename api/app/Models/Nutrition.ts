import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Person from './Person'
import { nanoid } from 'nanoid'

export default class Nutrition extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @beforeCreate()
  public static generateId(nutrition: Nutrition) {
    nutrition.id = nanoid()
  }

  @belongsTo(() => Person)
  public person: BelongsTo<typeof Person>

  @column()
  public person_id: string

  @column()
  public month: number

  @column()
  public weight: number

  @column()
  public height: number

  @column()
  public zScore1: number

  @column()
  public zScore2: number

  @column()
  public zScore3: number

  @column.dateTime()
  public datetime: DateTime

  // @beforeCreate()
  // public static generateDateTime(nutrition: Nutrition) {
  //   if (!nutrition.datetime) {
  //     nutrition.datetime = DateTime.now()
  //   }
  // }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
