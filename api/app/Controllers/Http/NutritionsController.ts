import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Nutrition from 'App/Models/Nutrition'
import Logger from '@ioc:Adonis/Core/Logger'

export default class NutritionsController {
  public async index({ response, request }: HttpContextContract) {
    const { personId } = request.qs()
    try {
      let nutritions

      if (personId) {
        const nutritions1 = await Nutrition.query().where('person_id', personId)

        nutritions = nutritions1.map((item) => {
          return {
            zScore1: item.zScore1,
            zScore2: item.zScore2,
            zScore3: item.zScore3,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            ...item.$attributes,
          }
        })
        Logger.info(JSON.stringify(nutritions1))
      } else {
        nutritions = await Nutrition.all()
      }

      return response.ok(nutritions)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async create({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async store({ response, request }: HttpContextContract) {
    try {
      const nutrition = await Nutrition.create(request.body())

      return response.created(nutrition)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async show({ response, request }: HttpContextContract) {
    try {
      const nutrition = await Nutrition.findOrFail(request.param('id'))

      return response.ok(nutrition)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async edit({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const nutrition = await Nutrition.updateOrCreate(request.params(), request.body())

      return response.created(nutrition)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    try {
      const nutrition = await Nutrition.findOrFail(request.param('id'))
      await nutrition.delete()

      return response.ok(nutrition)
    } catch (error) {
      return response.internalServerError(error)
    }
  }
}
