const data = {
  id: 1,
  meta: {
    author: 'Jane',
    tags: ['js', 'es6']
  }
}

const {id, meta: {author, tags}} = data
console.log(id, author, tags);
