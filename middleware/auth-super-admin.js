export default function ({ route, redirect }) {

    const role = localStorage.getItem('role');

    if (role !== 'super-admin') {
        return redirect('/')
    }
}
