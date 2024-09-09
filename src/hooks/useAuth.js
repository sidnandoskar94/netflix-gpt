import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firebaseAuth } from "../config/firebase";
import auth from '../service/auth/Auth';
import { loginUser, logoutUser } from '../store/userSlice';

const useAuth = () => {
    const storeUser = useSelector(store => store.user)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                dispatch(loginUser({ uid: user.uid, displayName: user.displayName, photoURL: user.photoURL, email: user.email }));
                console.log("UserData: ", user);
            } else {
                dispatch(logoutUser());
                console.log("User signed out!");
            }
        });

        return () => unsubscribe();
    }, [dispatch]);

    const signUp = (email, password) => {
        setLoading(true);
        setError(null);
        return auth.signUp(email, password)
            .then((user) => {
                const userName = email.split('@')[0];
                const photUrl = 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png';
                auth.updateUserProfile(userName, photUrl)
                    .then(() => {
                        console.log(userName, photUrl);
                        dispatch(loginUser({ ...storeUser, displayName: email, photoURL: user.password }))
                    })
                    .catch(setError)
                    .finally(() => setLoading(false));
                return user;
            })
            .catch(setError)
            .finally(() => setLoading(false));
    };

    const signIn = (email, password) => {
        setLoading(true);
        setError(null);
        return auth.signIn(email, password)
            .then((user) => true)
            .catch(setError)
            .finally(() => setLoading(false));
    };

    const signOut = () => {
        setLoading(true);
        setError(null);
        return auth.signOut()
            .then(() => true)
            .catch(setError)
            .finally(() => setLoading(false));
    };

    return { signUp, signIn, signOut, loading, error };
};

export default useAuth;