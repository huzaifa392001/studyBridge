const apiVersion = "api/";
const apiUrl = "http://study.nimbles.io/";
const uni = 'storage/images/uni/';
const course = 'storage/images/course/';
export const environment = {
    localhost: true,
    locald: false,
    dev: false,
    qa: false,
    staging: false,
    production: false,
    cookie: {
        name: 'ismClientVToken',
        expires: 30,
        path: '/',
        domain: 'localhost',
        secure: false,
        same_site: 'Lax',
    },
    apiUrl: apiUrl + apiVersion,
    uniImages: apiUrl + uni,
    courseImage: apiUrl + course
};
