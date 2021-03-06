var schema = {
  type: 'object',
  additional: false,
  fields: {
    address: {
      type: 'object',
      required: true,
      additional: false,
      fields: {
        street: {type: 'string', required: true},
        city: {type: 'string', required: true},
        zip: {type: 'string', required: true, len: 8, message: 'Invalid zip'}
      }
    }
  }
}

module.exports = schema;
