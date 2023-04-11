import getConfig from 'next/config';

function getConfigValue(key){
    const { publicRuntimeConfig } = getConfig();
    return publicRuntimeConfig[key];
}

export const publicRuntimeConfig = {
    APP_ENV: getConfigValue('APP_ENV'),
    SERVER_ENV: getConfigValue('SERVER_ENV'),
}