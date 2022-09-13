import App from '@/app';
import IndexRoute from '@routes/index.route';
import AcronymsRoute from '@routes/acronym.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new AcronymsRoute()]);

app.listen();
