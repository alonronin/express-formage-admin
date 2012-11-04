var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

var s = new Schema({
    list: [{
        name: String,
        list: [{
            name: String
        }]
    }],
    ref: { type: ObjectId, ref: 'pages' },
    string: { type: String, required: true },
    date: { type: Date },
    enum: { type: String, enum: ['1','2','3'] },
    rich_text: { type: Schema.Types.Html },
    text: { type: Schema.Types.Text },
    image: { type: Schema.Types.File },
    map: { type: Schema.Types.GeoPoint },
    num: Schema.Types.Integer,
    order: { type: Number, editable: false },
    bool: { type: Boolean, 'default': true },
    object: {
        object: {
            object: {
                string: String
            },
            rich_text: { type: Schema.Types.Html },
            map: { type:Schema.Types.GeoPoint}
        }
    }
});

module.exports = mongoose.model('tests', s);