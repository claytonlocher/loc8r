
/* GET 'about' page. */
module.exports.about = function(req, res) {
	res.render('generic-text', {
		title: 'About',
		content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, duo ex tamquam patrioque. Erat idque eam ea, mei natum erroribus ex. Nam sumo decore ad, et everti doctus animal est. Qui ex forensibus accommodare, at detracto tractatos sea. Ut vim dolore discere accusata, mel te dicant incorrupte. Duis facilisis in pro, quo erat legere audiam id.\n\nEi movet sententiae pri. Iusto quaeque in vix, nec propriae ullamcorper ut. Eam minim iudicabit te, eros noluisse elaboraret ex vis. Id ius elit propriae complectitur. Et pri esse tincidunt, no has latine inermis mnesarchum, elit legendos pri ad. Ei usu rebum posidonium, eu cibo postea antiopam has.'
	});
};

module.exports.angularApp = function(req, res) {
  res.render('layout', {title: 'Loc8r'});
};
