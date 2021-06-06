import Sidebar from "./Sidebar";

const Account = () => {
    return (
        <>
            <Sidebar
                color="gray"
                routes={[
                    { path: "/users", name: "User" },
                    { path: "/books", name: "Books" },
                ]}
            />
        </>
    );
};

export default Account;
