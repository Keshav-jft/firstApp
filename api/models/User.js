/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
const uuid = require ('node-uuid');
module.exports = {
  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      defaultsTo: uuid.v4,
    },
    firstName:{
      type:'string',
    },
    lastName:{
      type:'string',
    },
    email: {
      type: 'string',
      unique: true,
      required: true,
    },
    password:{
      type:'string'

    },
    role: {
      collection: 'role',
      via: 'user',
      dominant: true,
    },
    enabled:{
      type:'boolean',
      defaultsTo:false,
    },
    toJSON: function () {
      var obj = this.toObject ();
      delete obj.password;
      return obj;
    },
  },
  autoPK: false,

  beforeCreate: function (values, next) {
    console.log ('Before Create');

    this.password = CipherService.hashPassword (values);
    next ();
  },/*
  beforeUpdate: function (values, next) {
    if (values.email !== 'admin@gmail.com') {
      this.password = CipherService.hashPassword (values);
    }
    next ();
  },*/
};

