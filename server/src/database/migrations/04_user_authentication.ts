import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.alterTable('users', function (table) {
    table.string('email');
    table.string('password');
  });
}

export async function down(knex: Knex) {
  return knex.schema.alterTable('users', function(table) {
    table.dropColumn('email');
    table.dropColumn('password');
  });
}