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

    if (response.status !== 200) {
      throw new Error("Failed to delete city");
    } alert('City deleted')
  } catch (error) {
    console.error(error);
  }
}
