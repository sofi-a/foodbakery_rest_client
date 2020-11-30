import React from 'react';
import { stringify } from 'query-string';
import { fetchUtils, Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { OrderList, OrderShow } from './components/Orders';
import { TransactionList, TransactionShow } from './components/Transactions';
import { PackageOrderList, PackageOrderShow } from './components/PackageOrders';
import { WithdrawalList, WithdrawalShow  } from './components/Withdrawals';
import { Order, PackageOrder, Transaction, Withdrawal } from './models';

const apiUrl = 'https://delivery.movex.tech/wp-json/foodbakery/v1';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.headers.set('Access-Control-Expose-Headers', 'X-Total-Count');
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider(apiUrl, httpClient);

const foodbakeryDataProvider = {
    ...dataProvider,
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            perPage,
            page,
            order,
            sort: field
        };

        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return fetchUtils.fetchJson(url).then(({ headers, json }) => {
            return {
                data: formatResponse(resource, json),
                total: headers.get('x-total-count'),
            };
        });
    }
}

const formatResponse = (resource, data = []) => {
    switch(resource) {
        case 'orders':
            return data.map(item => ({ ...Order, ...item }));
        case 'transactions':
            return data.map(item => ({ ...Transaction, ...item }));
        case 'package-orders':
            return data.map(item => ({ ...PackageOrder, ...item }));
        case 'withdrawals':
            return data.map(item => ({ ...Withdrawal, ...item }));
        default:
            return data;
    }
}

const App = () => (
    <Admin dataProvider={foodbakeryDataProvider}>
        <Resource
            name="orders"
            list={OrderList}
            show={OrderShow} />
        <Resource
            name="transactions"
            list={TransactionList}
            show={TransactionShow} />
        <Resource
            name="package-orders"
            options={{ label: 'Membership Orders' }}
            list={PackageOrderList}
            show={PackageOrderShow} />
        <Resource
            name="withdrawals"
            list={WithdrawalList}
            show={WithdrawalShow} />
    </Admin>
);

export default App;
