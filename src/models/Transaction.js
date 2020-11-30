const Transaction = {
    id: 0,
    order_id: 0,
    date: '',
    modified: '',
    order_type: '',
    payment_gateway: '',
    payment_status: '',
    currency: '',
    total: 0,
    commission_charged: 0,
    credited_amount: 0,
    buyer: '',
    buyer_info: {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: ''
    },
    restaurant: '',
    restaurant_owner: ''
};

export default Transaction;
