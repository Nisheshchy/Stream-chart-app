import router from "../routes/auth.route";

export  async function signup(req, res) {
    res.send('Signup route');
}

export async function login(req, res) {
    res.send('Login route');
}

export async function logout(req, res) {
    res.send('Logout route');
}

export default router;