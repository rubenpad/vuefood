import { format } from "date-fns";
import fromUnixTime from "date-fns/fromUnixTime";
//import parseISO from 'date-fns/parseISO'

const formattersMixin = {
  methods: {
    formatDate(date) {
      const formattedDate = format(fromUnixTime(date), "dd MMMMMMMM yyyy");
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
