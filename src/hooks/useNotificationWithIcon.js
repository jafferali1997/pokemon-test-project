import { notification } from "antd";

export default function useNotificationWithIcon(type, msg) {
  notification[type]({
    message: msg,
  });
};
