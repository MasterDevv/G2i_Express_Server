import App from '@/app';
import IndexRoute from '@/routes/IndexRoute';
import AcronymsRoute from '@/routes/AcronymsRoute';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new AcronymsRoute()]);

app.listen();
