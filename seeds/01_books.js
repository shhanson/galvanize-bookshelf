'use strict';
const booksArray = require('../books')
exports.seed = knex => knex('books').del()
    .then(() => knex('books').insert(booksArray))
    .then(() => knex.raw("SELECT setval('books_id_seq', (SELECT MAX(id) FROM books))"));
