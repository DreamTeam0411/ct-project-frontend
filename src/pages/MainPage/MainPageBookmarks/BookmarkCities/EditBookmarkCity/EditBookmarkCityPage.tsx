import {useParams} from "react-router-dom";
import useFetchAdminCities from "../../../../../stores/AdminStore/fetch_admin_cities.tsx";
import {EditBookmarkCity} from "./EditBookmarkCity.tsx";

export const EditBookmarkCityPage = () => {
    const searchParams = useParams();
    const {dataCity} = useFetchAdminCities();

    if (dataCity.length !== 0 && searchParams.id !== undefined)
        return (

            <div>
                {dataCity.map(
                    /* eslint-disable-next-line no-mixed-spaces-and-tabs */ (data) =>
                        data.id === +searchParams.id ? (
                            <EditBookmarkCity
                                key={data.id}
                                city={data.name}
                                id={data.id}
                            />
                        ) : (
                            ""
                        )
                )}
            </div>
        );
};