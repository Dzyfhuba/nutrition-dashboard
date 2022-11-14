import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Nutrition from 'App/Models/Nutrition'
import Person from 'App/Models/Person'

export default class DataController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await Database.query()
        .from('people')
        .join('nutritions', 'nutritions.person_id', 'people.id')
        .select([
          'nutritions.id as nutrition_id',
          'people.id as person_id',
          'people.name',
          'nutritions.month',
          'nutritions.weight',
          'nutritions.height',
          'nutritions.z_score',
          'nutritions.created_at',
          'nutritions.updated_at',
        ])

      return response.ok(data)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async create({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async store({ request, response }: HttpContextContract) {
    const { name, month, weight, height, zScore1, zScore2, zScore3 } = request.body()
    try {
      const person = await Person.create({
        name,
      })
      const nutrition = await Nutrition.create({
        person_id: person.id,
        month,
        weight,
        height,
        zScore1,
        zScore2,
        zScore3,
      })

      return response.created({
        ...person.$attributes,
        ...nutrition.$attributes,
      })
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const data = await Database.query()
        .from('people')
        .join('nutritions', 'nutritions.person_id', 'people.id')
        .where('nutritions.person_id', request.param('id'))
        .select([
          'nutritions.id',
          'people.id as person_id',
          'people.name',
          'nutritions.month',
          'nutritions.weight',
          'nutritions.height',
          'nutritions.z_score as zScore',
          'nutritions.created_at',
          'nutritions.updated_at',
        ])
        .orderBy('nutritions.month', 'asc')

      return response.ok(data)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async edit({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async update({ request, response }: HttpContextContract) {
    const { name, month, weight, height, zScore1, zScore2, zScore3 } = request.body()
    try {
      const nutrition = await Nutrition.findOrFail(request.param('id'))
      nutrition.month = month
      nutrition.weight = weight
      nutrition.height = height
      nutrition.zScore1 = zScore1
      nutrition.zScore2 = zScore2
      nutrition.zScore3 = zScore3
      await nutrition.save()

      const person = await Person.findOrFail(nutrition.person_id)
      person.name = name
      await person.save()

      return response.created({
        ...person.$attributes,
        ...nutrition.$attributes,
      })
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async destroy({ response }: HttpContextContract) {
    return response.notFound()
  }
}
