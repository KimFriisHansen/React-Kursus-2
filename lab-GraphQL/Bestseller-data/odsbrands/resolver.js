const axios = require('axios')

exports.resolver = {
    Query: {
        odsBrands: async () => {
            return new Promise(function (resolve, reject) {
                console.log('Im here');
                return axios.get('http://odstest.bestcorp.net/brands', { headers: { 'api-key': "8902841b-edd7-4ee9-8b71-9793f05a3cd5" } })
                    .then(res => {
                        //let result = res.json();
                        resolve(res.data);
                    })
            }).catch((error) => {
                console.log('Get error ' + error);
                console.log(error);
                reject(error)
            });
        },
        odsBrand: async (_, args) => {
            return new Promise(function (resolve, reject) {
                console.log('Im here');
                return axios.get('http://odstest.bestcorp.net/brands/' + args.shortName, { headers: { 'api-key': "8902841b-edd7-4ee9-8b71-9793f05a3cd5" } })
                    .then(res => {
                        //let result = res.json();
                        resolve(res.data);
                    })
            }).catch((error) => {
                console.log('Get error ' + error);
                console.log(error);
                reject(error)
            });
        }
    }
}