export default function ({ route, redirect }) {

    const ru = localStorage.getItem('ru');

    if (ru === 'ru2') {
        return redirect('/')
    }
}
