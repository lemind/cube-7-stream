import * as mongoose from 'mongoose';

const StreamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

})

export default mongoose.model('Stream', StreamSchema)
