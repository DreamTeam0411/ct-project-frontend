import {useParams} from "react-router-dom";

import EditMaster from "./EditMaster.tsx";
import useFetchAdminMasters from "../../../../../stores/AdminStore/fetch_admin_all_masters.tsx";




const EditMasterPage = () => {
    const searchParams = useParams();
    const {dataMasters} = useFetchAdminMasters();
    console.log(searchParams)
    if (dataMasters.length !== 0 && searchParams.id !== undefined)
        return (

            <div>
                {dataMasters.map(
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