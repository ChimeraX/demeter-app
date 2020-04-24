import { fetchCategories } from '../redux/Category';
import DemeterXState from '../redux/DemeterXState';
import CategoryList, { CategoryListProperties } from '../widgets/CategoryList';
import { connect } from 'react-redux';
import Category from '../model/Category';
import { fetchRecipes, setCategory } from '../redux/Recipe';

const mapStateToProps = (state: DemeterXState, properties?: Partial<CategoryListProperties>) => {
    return {
        categories: state.category.categories,
    };
};

const mapDispatchToProps = (dispatch: any, properties?: Partial<CategoryListProperties>) => {
    return {
        onClick: (category: Category) => {
            if (!category.fetched) {
                dispatch(fetchCategories(category.id));
                category.fetched = true;
            }
            dispatch(setCategory(category.id));
            dispatch(fetchRecipes(true));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
