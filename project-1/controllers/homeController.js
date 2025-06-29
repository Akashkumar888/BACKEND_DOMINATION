
exports.getHome = (req, res) => {
  res.render('home', { title: 'Welcome', user: req.user });
};

exports.getDashboard = (req, res) => {
  res.render('dashboard', { title: 'Dashboard', user: req.user });
};

