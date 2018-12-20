// rollup.config.js
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { readdirSync } from 'fs';

const packages = readdirSync('./packages');

export default packages.map(name => ({
    input: `./packages/${name}/lib/index.js`,
    plugins: [
        resolve({
            preferBuiltins: false
        }),
        commonjs(),
        babel()
    ],
    output: [{ format: 'es', file: `./packages/${name}/lib/es.js` }]
}));
