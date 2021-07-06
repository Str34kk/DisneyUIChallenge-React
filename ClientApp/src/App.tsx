import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import './custom.css'
import Header from './components/Header';
import Home from './components/Home';

export default () => (
    <div>
        <Header />
        <Home />
    </div>
);
