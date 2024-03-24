import {useParams} from "react-router-dom";
import useFetchAdminCategories from "../../../../../stores/AdminStore/fetch_admin_categories.tsx";
import EditBookmarkCategory from "./EditBookmarkCategory.tsx";



const EditBookmarkCategoryPage = () => {
    const searchParams = useParams();
    const {dataCategory} = useFetchAdminCategories();
    if (dataCategory.length !== 0 && searchParams.id !== undefined)
        return (

            <div>
                {dataCategory.map(
                    /* eslint-disable-next-line no-mixed-spaces-and-tabs */ (data) =>
                        data.id === +searchParams.id ? (
                            <EditBookmarkCategory
                                key={data.id}
                                title={data.title}
                                id={data.id}
                                icon={data.icon}

                            />
                        ) : (
                            ""
                        )
                )}
            </div>
        );
};

export default EditBookmarkCategoryPage;