import { format } from "date-fns";
import fromUnixTime from "date-fns/fromUnixTime";

const formattersMixin = {
  methods: {
    formatDate(date) {
      const intDate = parseInt(date);
      const formattedDate = format(fromUnixTime(intDate), "dd MMMMMMMM yyyy");
      return formattedDate;
    },
    formatPrice(price) {
      return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(price.toFixed(0));
    }
  }
};

export default formattersMixin;
