/* option A. document root path */
export const PATH_ROOT = '/';

// /* option B. not document root path */
// export const PATH_ROOT = '/sample';


const PATH_ROOT_DIVIDED = (PATH_ROOT === '/') ? PATH_ROOT : PATH_ROOT + '/';
export const PATH_PLAN = PATH_ROOT_DIVIDED + 'plan/';
export const PATH_LOGIN = PATH_ROOT_DIVIDED + 'login/';
export const PATH_DASHBOARD = PATH_ROOT_DIVIDED + 'dashboard/';
