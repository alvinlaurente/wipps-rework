export default function ({ route, redirect }) {

    const role = localStorage.getItem('role');

    if (role === 'safety-inspector') {
        return redirect('/404')
    }
}
