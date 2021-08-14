import moment from "moment";

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      return datetime ? moment().format("MMMM Do YYYY, h:mm:ss a") : "-";
    },
  },
};

export const exactDateFilter = {
  filters: {
    exactDate(dateTime) {
      moment.locale("en");
      if (!dateTime) return "-";
      // return moment(dateTime).format('Do M YYYY - h:mm a');
      return moment(dateTime).format("D MMM YYYY - h:mm a");
    },
  },
};
