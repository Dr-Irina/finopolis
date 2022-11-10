import paths from './paths';
import CategoriesList from "./categoriesList";
import SubCategoriesList from "./subCategoriesList";
import ReportList from "./reportsList";
import ReportDetails from "./reportDetails";

const routes = {
	index: {
		path: paths.index,
		component: CategoriesList,
	},
	categoryInfo: {
		path: paths.categoryInfo,
		component: SubCategoriesList,
	},
	suCategoryInfo: {
		path: paths.subCategoryInfo,
		component: ReportList,
	},
	reportDetails: {
		path: paths.reportDetails,
		component: ReportDetails,
	},

};

export default routes;
