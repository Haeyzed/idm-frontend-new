import { getToken } from "firebase/messaging";
import { messaging } from "./firebaseConfig";

const { VITE_APP_VAPID_KEY } = import.meta.env;

export const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey: VITE_APP_VAPID_KEY,
    })
    return token;
  } else if (permission === "denied") {
    alert("You denied permission for notifications.");
    return null;
  }
};
