import moment from "moment";

export const dateFilter = {
  filters: {
    date(dateTime) {
      moment.locale("en");
      if (!dateTime) return "-";
      return moment().format("D MMM YYYY");
    },
  },
};

export const exactDateFilter = {
  filters: {
    exactDate(dateTime) {
      moment.locale("en");
      if (!dateTime) return "-";
      return moment(dateTime).format("D MMM YYYY - h:mm a");
    },
  },
};

export const publishDateFilter = {
  filters: {
    publishDate(dateTime) {
      moment.locale("en");
      if (!dateTime) return "-";
      return moment(dateTime).format("dddd, D MMMM YYYY, h:mm a");
    },
  },
};
