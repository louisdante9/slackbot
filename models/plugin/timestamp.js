 function timestamp(schema) {
    schema.add({
      createdAt: Date,
      updatedAt: Date,
    });
  
    // eslint-disable-next-line func-names
    schema.pre('save', function (next) {
      const now = Date.now();
      this.updatedAt = now;
      if (!this.createdAt) {
        this.createdAt = now;
      }
      next();
    });
  }
  
  module.exports = timestamp