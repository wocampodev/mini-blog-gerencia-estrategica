import "dayjs/locale/es";
import dayjs from "dayjs";
dayjs.locale("es");

export function fechaPublicacion(fecha) {
  let now = dayjs(fecha);
  return now.format("dddd, D MMMM YYYY");
}
