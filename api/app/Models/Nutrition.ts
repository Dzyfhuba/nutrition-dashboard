import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { nanoid } from 'nanoid'

export default class Nutrition extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @beforeCreate()
  public static generateId(nutrition: Nutrition) {
    if (!nutrition.id) {
      nutrition.id = nanoid()
    }
  }

  @column()
  public name: string

  @column()
  public gender: ['L' | 'P']

  @column()
  public month: string

  @column()
  public height: number

  @column()
  public weight: number

  @column()
  public category: ['BB/TB' | 'BB/U' | 'TB/U']

  @column()
  public z_score: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
