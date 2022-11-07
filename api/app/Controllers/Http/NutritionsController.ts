import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Nutrition from 'App/Models/Nutrition'

export default class NutritionsController {
  public async index({ response }: HttpContextContract) {
    try {
      const nutritions = await Nutrition.all()

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
