import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Person from 'App/Models/Person'

export default class PeopleController {
  public async index({ response }: HttpContextContract) {
    try {
      const people = await Person.query().orderBy('updated_at', 'desc')

      return response.ok(people)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async create({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async store({ response, request }: HttpContextContract) {
    try {
      const person = await Person.create(request.body())

      return response.created(person)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const person = await Person.findOrFail(request.param('id'))

      return response.ok(person)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async edit({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const person = await Person.updateOrCreate(request.params(), request.body())

      return response.created(person)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async destroy({ response, request }: HttpContextContract) {
    try {
      const person = await Person.findOrFail(request.param('id'))

      await person.delete()

      return response.ok(person)
    } catch (error) {
      return response.internalServerError(error)
    }
  }
}
