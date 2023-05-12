import { useSelector } from "react-redux";

import classes from "./Notification.module.css";

const Notification = (props) => {
  const notificationData = useSelector((state) => state.cart.notification);
  console.log(notificationData);

  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
