var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

var widgetsSchema = new Schema({
    title: { type: String, required: true },
    enum: { type: String, enum: [1, 2, 3, 4, 5] },
    file: { type: Schema.Types.File},
    picture: { type: Schema.Types.Picture},
    textarea: { type: Schema.Types.Text},
    editor: { type: Schema.Types.Html},
    nested: [Object],
    boolean: Boolean,
    order: { type: Number, editable: false}
});

widgetsSchema.methods.toString = function(){
    return this.title;
};

var widgets = module.exports = mongoose.model('widgets', widgetsSchema);

