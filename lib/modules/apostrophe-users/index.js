// This configures the apostrophe-users module to add an admin-level
// group by default:

module.exports = {
  typeAdminsCanEditAllTypes: false,
  groups: [
    {
      title: 'admin',
      permissions: [ 'admin' ]
    }
  ]
};
