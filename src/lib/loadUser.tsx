import storage from "../utils/storage";
import { getUser, AuthUser } from "../features/auth";

export async function loadUser() {
  if (storage.getToken()) {
    try {
      const response = await getUser();
      if (response) {
        // console.log(response);

        // console.log(response);
        const userData: AuthUser = {
          id: response.id,
          fullName: response.fullName,
          phoneNumber: response.phoneNumber,
          role: response.role, // Assuming the role is always "admin"
        };

        return userData;
      }
      return null;
    } catch (error) {
      console.error("Error loading user:", error);
      return null;
    }
  }
  return null;
}
