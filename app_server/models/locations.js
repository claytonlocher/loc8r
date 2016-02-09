
var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
	author: String,
	rating: {
		type: Number,
		required: true,
		min: 0,
		max: 5
	},
	reviewText: String,
	createdOn: {
		type: Date,
		"default": Date.now
	}
});

var openingTimeSchema = new mongoose.Schema({
	days: {
		type: String,
		required: true
	},
	opening: String,
	closing: String,
	closed: {
		type: Boolean,
		required: true
	}
}); 7

var locationSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	address: String,
	rating: {
		type: Number,
		"default": 0,
		min: 0,
		max: 5
	},
	facilities: [String],
	coords: {
		type: [Number],
		index: '2dsphere'
	},
	openingTimes: [openingTimeSchema],
	reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema);

// db.locations.save({
// 	name: 'Caffe Paradiso',
// 	address: 'Lincoln and Nevada',
// 	rating: 5,
// 	facilities: ['Hot drinks', 'Premium wifi'],
// 	coords: [-88.219432, 40.105820],
// 	openingTimes: [{
// 		days: 'Monday - Friday',
// 		opening: '6:00am',
// 		closing: '10:00pm',
// 		closed: false
// 	}, {
// 		days: 'Saturday',
// 		opening: '7:00am',
// 		closing: '10:00pm',
// 		closed: false,
// 	}, {
// 		days: 'Sunday',
// 		opening: '',
// 		closing: '',
// 		closed: true
// 	}]
// })

// db.locations.update({
// 	name: 'Caffe Paradiso'
// }, {
// 	$push: {
// 		reviews: {
// 			author: 'Vicki Prince',
// 			id: ObjectId(),
// 			rating: 3,
// 			timestamp: new Date('May 16, 2015'),
// 			reviewText: "The coffe is a bit expensive, but the atmosphere is always fun and vibrant."
// 		}
// 	}
// }) 
