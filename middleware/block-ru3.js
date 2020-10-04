export default function ({ route, redirect }) {

    const ru = localStorage.getItem('ru');

    if (ru === 'ru3') {
        return redirect('/')
    }
}
