import {
  getDefault,
  getContacts,
  getContact,
  postContact,
  putContact,
  deleteContact
} from './controllers'


export default app => {
  app.route('/contacts')
    .get(getContacts)
    .post(postContact)

  app.route('/contacts/:contactID')
    .get(getContact)
    .put(putContact)
    .delete(deleteContact)

  app.get('*', getDefault)
}
