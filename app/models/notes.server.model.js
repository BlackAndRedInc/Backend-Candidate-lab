const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

//create User Schema Object
const NoteSchema = new Schema({
    title: {
        type: String,
        default: '',
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true,
    },
    creator: {
      type: Schema.ObjectId,
      ref: 'User'
    },
    deleted: {
      type: Boolean,
      default: false
    }
}, { timestamps: { createdAt: 'createdate', updatedAt: 'updatedate' } });

NoteSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('Note', NoteSchema);
