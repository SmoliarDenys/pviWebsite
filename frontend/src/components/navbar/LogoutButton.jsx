import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return <div className="mt-auto">
        {!loading ? (
            <li>
                <div 
                    onClick={logout}
                    className="text-red-500"
                >
                    Logout
                </div>
            </li>
        ) : (
            <div className="loading loading-spinner"></div>
        )}
    </div>
}

export default LogoutButton;