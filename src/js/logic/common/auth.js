export default {
  logout: function() {
    delete localStorage.token;
  },
  loggedIn: function() {
    return !!localStorage.token;
  },
};
