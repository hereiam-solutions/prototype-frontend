// MongoDB Realm imports
import * as Realm from 'realm-web';

const connectToRealm = () => {
  // Realm initialization
  const appId = process.env.REACT_APP_REALM_APP_ID
    ? process.env.REACT_APP_REALM_APP_ID
    : '';

  const app = new Realm.App({ id: appId });

  return app;
};

export default connectToRealm;
