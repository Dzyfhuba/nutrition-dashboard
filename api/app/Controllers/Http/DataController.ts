import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Nutrition from 'App/Models/Nutrition'
import Person from 'App/Models/Person'
import Logger from '@ioc:Adonis/Core/Logger'

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
    const { name, month, weight, height, zScore1, zScore2, zScore3 } = request.body() as {
      name: string
      month: number
      weight: number
      height: number
      zScore1: number
      zScore2: number
      zScore3: number
    }
    Logger.info(JSON.stringify(request.body()))
    try {
      const exists = await Person.query().where('id', name.replace('\r', ' '))
      Logger.info('exist ' + JSON.stringify(exists))

      let personId: string = ''
      let person
      let nutrition

      if (exists.length) {
        Logger.info('data exist')
        personId = exists[0].id
        person = exists[0]
        nutrition = await Nutrition.create({
          person_id: personId,
          month,
          weight,
          height,
          zScore1,
          zScore2,
          zScore3,
        })
      } else {
        Logger.info('no data')
        person = await Person.create({
          name,
        })
        nutrition = await Nutrition.create({
          person_id: person.id,
          month,
          weight,
          height,
          zScore1,
          zScore2,
          zScore3,
        })
      }

      Logger.info('success')

      return response.created({
        person: person.$attributes,
        nutrition: nutrition.$attributes,
      })
    } catch (error) {
      // Logger.info(JSON.stringify(request))
      return response.internalServerError({
        body: request.body(),
        error,
      })
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

  public async storeGet({ request, response }: HttpContextContract) {
    const { name, month, weight, height, zScore1, zScore2, zScore3 } = request.params()
    try {
      const exists = await Person.find(name)
      Logger.info(JSON.stringify(exists))

      let personId: string = ''
      let person

      if (exists) {
        personId = exists.id
      } else {
        person = await Person.create({
          name,
        })
      }

      const nutrition = await Nutrition.create({
        person_id: person.id || personId,
        month,
        weight,
        height,
        zScore1,
        zScore2,
        zScore3,
      })

      return response.created({
        body: request.body(),
        data: {
          ...person.$attributes,
          ...nutrition.$attributes,
        },
      })
    } catch (error) {
      Logger.info(JSON.stringify(request))
      return response.internalServerError({
        link: 'https://stackoverflow.com/questions/58150008/arduino-post-request-using-json',
        body: request.body(),
        error,
      })
    }
  }
}
