import React from 'react';
import ReactDom from 'react-dom';
import  { Carousel } from './components/Carousel';

import '../sass/_index.scss';

const Sample = [
    {
        name: 'Item 1',
        description: 'simple description',
        cover: 'https://www.thenational.ae/image/policy:1.855106:1556542236/sp30-Khabib-Nurmagomedov.jpg?f=16x9&w=1200&$p$f$w=838e3e4'
    },
    {
        name: 'Item 2',
        description: 'simple description',
        cover: 'https://www.thenational.ae/image/policy:1.855106:1556542236/sp30-Khabib-Nurmagomedov.jpg?f=16x9&w=1200&$p$f$w=838e3e4'
    },
    {
        name: 'Item 3',
        description: 'simple description',
        cover: 'https://www.thenational.ae/image/policy:1.855106:1556542236/sp30-Khabib-Nurmagomedov.jpg?f=16x9&w=1200&$p$f$w=838e3e4'
    }
]
const App = (props: any) => {
    return <Carousel items={Sample} />;
}

ReactDom.render(<App />, document.getElementById('root'));
