import paths from './paths';
import CategoriesList from "./categoriesList";
import SubCategoriesList from "./subCategoriesList";

const routes = {
	index: {
		path: paths.index,
		component: CategoriesList,
	},
	categoryInfo: {
		path: paths.categoryInfo,
		component: SubCategoriesList,
	},
};

export default routes;
