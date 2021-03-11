import { createGlobalStyle } from 'styled-components';
import back from '../components/img/astro.png';

const Global = createGlobalStyle `
background-image: url('${back}');
body {
    margin: 0;
    padding: 0;
};
`

export default Global;