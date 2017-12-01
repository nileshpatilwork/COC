// `.env.json` is generated by the `npm run build` command
import * as env from './.env.json';

export const environment = {
    production: true,
    version: env.npm_package_version,
    serverUrl: 'https://api.chucknorris.io'
};
