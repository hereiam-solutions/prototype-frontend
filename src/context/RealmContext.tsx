import { createContext } from 'react';

// MongoDB Realm imports
import * as Realm from 'realm-web';
import connectToRealm from '../helpers/connectToRealm';

const app = connectToRealm();

// create a type for the context's value
export type RealmContextType = {
  realm: Realm.App;
};

// create the context and set a default value that matches the context type
const RealmContext = createContext<RealmContextType>({
  realm: app,
});

export default RealmContext;
