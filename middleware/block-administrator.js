export default function ({ route, redirect }) {

    const role = localStorage.getItem('role');

    if (role === 'administrator') {
        return redirect('/404')
    }
}
