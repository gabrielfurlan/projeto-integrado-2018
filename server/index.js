import express from 'express';
import path from 'path';
import routes from './routes';
import compression from 'compression';
import useragent from 'express-useragent';

const app = express();
const port = 8080;

app.use(compression());

app.get('*.js', (req, res, next) => {
	req.url = req.url + '.gz';
	res.set('Content-Encoding', 'gzip');
	res.set('Content-Type', 'text/javascript');
	next();
});

app.use(useragent.express());

app.use('/', express.static('public'));
app.set('views', __dirname);
app.set('view engine', 'ejs');

routes(app);

app.listen(port, err => {
	if (err) console.log(err);
	else console.log(`Server online - Listening to port ${port}`);
});
