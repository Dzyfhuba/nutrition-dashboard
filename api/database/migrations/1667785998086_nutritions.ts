import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'nutritions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id').notNullable()
      table
        .integer('person_normalized_id')
        .unsigned()
        .references('id')
        .inTable('people')
        .notNullable()
      table.string('month').notNullable()
      table.decimal('weight').notNullable()
      table.decimal('height').notNullable()
      table.decimal('z_score1').notNullable()
      table.decimal('z_score2').notNullable()
      table.decimal('z_score3').notNullable()
      table.timestamp('datetime').defaultTo(this.now())

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
