export default function ({ route, redirect }) {

    const ru = localStorage.getItem('ru');

    if (ru === 'ru5') {
        return redirect('/404')
    }
}
