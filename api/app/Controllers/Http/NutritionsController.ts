import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class NutritionsController {
  public async index({ response }: HttpContextContract) {
    return response.ok('good')
  }

  public async create({ response }: HttpContextContract) {
    return response.serviceUnavailable()
  }

  public async store({ response }: HttpContextContract) {
    return response.serviceUnavailable()
  }

  public async show({ response }: HttpContextContract) {
    return response.serviceUnavailable()
  }

  public async edit({ response }: HttpContextContract) {
    return response.serviceUnavailable()
  }

  public async update({ response }: HttpContextContract) {
    return response.serviceUnavailable()
  }

  public async destroy({ response }: HttpContextContract) {
    return response.serviceUnavailable()
  }
}
