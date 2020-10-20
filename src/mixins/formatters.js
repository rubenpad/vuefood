import { format } from 'date-fns';
import fromUnixTime from 'date-fns/fromUnixTime';
import addDays from 'date-fns/addDays';

const formattersMixin = {
    methods: {
        formatDate(date) {
            const intDate = parseInt(date);
            const formattedDate = format(
                addDays(fromUnixTime(intDate), 1),
                'dd MMMMMMMM yyyy'
            );
            return formattedDate;
        },
        formatPrice(price) {
            return Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(price.toFixed(0));
        },
    },
};

export default formattersMixin;
