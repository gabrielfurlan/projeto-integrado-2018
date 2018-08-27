const routes = (app) => {
	app.get('*', (req, res) => res.render('generic-index'));
};

export default routes;
