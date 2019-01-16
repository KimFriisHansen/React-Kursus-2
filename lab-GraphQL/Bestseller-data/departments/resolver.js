const departments = require('./data');
const { find, filter } = require('lodash');

exports.resolver = {
    Query: {
        departments: () => departments,
        department: (_, args) => {
            return find(departments, { MDM_IDENTIFIER: args.id })
        },
        departmentName: (_, args) => {
            if (args.name) {
                return filter(departments, { DEPARTMENT_NAME: args.name })
            } else {
                return departments;
            }
        }
    }
}