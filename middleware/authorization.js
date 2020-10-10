export default function ({ route, redirect }) {

  const role = localStorage.getItem('role');

  switch(role) {
    case "safety-man":
      return redirect('/dashboard/beranda')
      break;
    case "safety-inspector":
      return redirect('/dashboard/beranda')
      break;
    case "super-admin":
      return redirect('/dashboard/beranda')
      break;
    case "supervisor":
      return redirect('/dashboard/dashboard')
      break;
    case "administrator":
      return redirect('/dashboard/beranda')
      break;
    default:
      return redirect('/account/login')
  }
}
