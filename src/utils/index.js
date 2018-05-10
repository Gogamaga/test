import moment from "moment";
import localeUk from "moment/locale/uk.js";

export function parseTimeStamp(time) {
    return moment(time)
        .locale("uk", localeUk)
        .format("LLL");
}

