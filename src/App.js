import React from 'react';
import { Admin } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const App = () => <Admin dataProvider={simpleRestProvider('https://delivery.movex.tech/')} />;

export default App;
