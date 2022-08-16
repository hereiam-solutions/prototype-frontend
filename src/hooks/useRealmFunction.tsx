// this custom hook serves as an abstraction for calling custom Realm functions
import { useEffect, useState } from 'react';
import useRealm from './useRealm';

type RealmFunctionParametersType = {
  functionName: string;
  args: [];
};

const useRealmFunction = ({
  functionName,
  args,
}: RealmFunctionParametersType) => {
  // get the realm connection from context
  const { realm } = useRealm();

  // initialize the states
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<unknown>(null);
  const [error, setError] = useState<boolean>(false);

  // runs when the hook is called
  useEffect(() => {
    const callRealmFunction = async () => {
      try {
        setLoading(true);
        if (realm.currentUser) {
          // call the Realm function
          const response = await realm.currentUser.callFunction(
            functionName,
            args
          );

          // set the response as the state of this hook
          setData(response);
        } else {
          // there is no user object on the realm connection
          setError(true);
        }

        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
        console.log(
          'There has been an error while calling the Realm custom function called:',
          functionName,
          'error:',
          e
        );
      }
    };

    callRealmFunction();
  }, [args, functionName, realm.currentUser]);

  return { data, loading, error };
};

export default useRealmFunction;
