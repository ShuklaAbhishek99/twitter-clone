import { useState } from "react";
import authService from "./appwrite/auth";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const create = async (e) => {
        e.preventDefault();
        const userData = await authService.createAccount({
            email,
            password,
            name,
        });

        console.log(userData);
    };

    const loginUser = async (e) => {
        e.preventDefault();

        const loginData = await authService.login({
            email,
            password,
        });

        console.log(loginData);
    };

    return (
        <>
            <div className="bg-red-400 text-center text-3xl">Signup</div>
            <form onSubmit={create}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    placeholder="name"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    placeholder="email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder="password"
                />
                <button className="bg-blue-500" type="submit">
                    Create Account
                </button>
            </form>

            <div className="bg-red-400 text-center text-3xl">Login</div>
            <form onSubmit={loginUser}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    placeholder="email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder="password"
                />
                <button className="bg-blue-500" type="submit">
                    Login
                </button>
            </form>

            <br />
            <br />
            <button
                className="bg-blue-500"
                onClick={() => authService.logout()}
            >
                Logout
            </button>

            <br />
            {/* {authService.getCurrentUser() && "User Session Exists"} */}
        </>
    );
}

export default App;
