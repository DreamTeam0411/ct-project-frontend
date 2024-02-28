import axios from "axios";

const token = localStorage.getItem("token");

export async function deleteCityAdmin(id: number): Promise<void> {
  try {
    const response = await axios.delete(
      `https://ct-project.pp.ua/api/v1/admin/cities/${id}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to delete city");
    }
  } catch (error) {
    console.error(error);
  }
}
