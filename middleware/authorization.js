export default function ({ route, redirect }) {

  const role = localStorage.getItem('role');

  switch(role) {
    case "safety-man":
      return redirect('/safety-man/beranda')
      break;
    case "safety-inspector":
      return redirect('/safety-inspector/beranda')
      break;
    case "super-admin":
      return redirect('/super-admin/beranda')
      break;
    case "supervisor":
      return redirect('/supervisor/beranda')
      break;
    case "administrator":
      return redirect('/administrator/beranda')
      break;
    default:
      return redirect('/account/login')
  }
}
