import {useParams} from "react-router-dom";

import EditMaster from "./EditMaster.tsx";
import useFetchAdminServices from "../../../../../stores/AdminStore/fetch_admin_services.tsx";




const EditMasterPage = () => {
    const searchParams = useParams();
    const {dataServices} = useFetchAdminServices();
    console.log(searchParams)
    if (dataServices.length !== 0 && searchParams.id !== undefined)
        return (

            <div>
                {dataServices.map(
                    (data) =>
                        data.id === +searchParams.id ? (
                            <EditMaster
                                key={data.id}
                                data={data}
                                id={data.id}
                            />
                        ) : (
                            ""
                        )
                )}
            </div>
        );
};

export default EditMasterPage;