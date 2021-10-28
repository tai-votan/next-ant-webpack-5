import { useEffect, ComponentType } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCurrentUser } from "@/redux/userSlice";
import { Header, Footer, Loading } from "@/components";

const withAuth =
  <P extends object>(Component: ComponentType<P>) =>
  () => {
    const { currentUser } = useAppSelector(({ user }) => user);
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(getCurrentUser());
    }, []);

    if (!currentUser.id) {
      return <Loading />;
    }

    return (
      <>
        <Header currentUser={currentUser} />
        <Component {...((currentUser || {}) as P)} />
        <Footer />
      </>
    );
  };

export default withAuth;
