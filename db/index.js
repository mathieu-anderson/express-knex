module.exports = knex => {
  return {
    addUser: function(table = "users", newUserData) {
      return knex(table).insert(newUserData).then(() => {
        return this.findUserByEmail(newUserData.email);
      });
    }
  };
};
