module.exports = {
  async up(db) {
    await db.createCollection('streams');
  },

  async down(db) {
    await db.collection('streams').drop();
  }
};
