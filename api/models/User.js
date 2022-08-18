/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'users',
  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    firstName: {
      type: 'string',
      columnName: 'first_name',
      minLength: 2
    },
    lastName: {
      type: 'string',
      columnName: 'last_name',
    },
    username: {
      type: 'string',
      isNotIn: ['admin', 'super-admin', 'user'],
      maxLength: 10
    },
    twitterUrl: {
      type: 'string',
      columnName: 'twitter_url',
      isURL: true
    },
    email: {
      type: 'string',
      isEmail: true,
      unique: true
    },
    age: {
      type: 'number',
      columnType: 'integer',
      // isInteger: true,
      defaultsTo: 18,
      min: 18,
      max: 120
    } ,
    role: {
      type: 'string',
      isIn: ['user', 'admin', 'super-admin'],
      defaultsTo: 'user'
    },
    petName: {
      type: 'ref',
      isString: true,
      isNotEmptyString: true
    },
    favoriteFrameworks: {
      type: 'json',
      isNumber: true
    },
    ip: {
      type: 'string',
      isIP: true
    },
    hasAgreedToTerms: {
      type: 'ref',
      isBoolean: true
    },
    themeColor: {
      type: 'string',
      isHexColor: true
    },
    uuid: {
      type: 'string',
      isUUID: true
    },
    creditCard: {
      type: 'string',
      isCreditCard: true
    },
    workEmail: {
      type: 'string',
      regex:  /\w+@sailscasts\.com/i
    },
    country: {
      type: 'string',
      custom: function(country) {
        return ['Nigeria', 'Kenya', 'Ghana'].includes(country)
      }
    }
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};
