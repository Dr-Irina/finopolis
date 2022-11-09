import MainPage from './main';
import paths from './paths';
import CategoriesList from "./categoriesList";

const routes = {
	index: {
		path: paths.index,
		component: CategoriesList,
	},
};

export default routes;
