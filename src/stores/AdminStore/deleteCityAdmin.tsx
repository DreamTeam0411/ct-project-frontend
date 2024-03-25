import axios from "axios";



export async function deleteCityAdmin(id: number): Promise<void> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(
      `https://ct-project.pp.ua/api/v1/admin/cities/${id}`,
      {
        headers: { Authorization: "Bearer " + token },
      }

    );
if (response.status === 204) {

  alert('Видалено')
}
    if (response.status !== 204) {
      throw new Error("Failed to delete city");
    }
  } catch (error) {
    console.error(error);
  }
}
