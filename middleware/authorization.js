export default function ({ route, redirect }) {

  const role = localStorage.getItem('role');

  switch(role) {
    case "safety-man":
      return redirect('/safety-man/dashboard/beranda')
      break;
    case "safety-inspector":
      return redirect('/safety-inspector/dashboard/beranda')
      break;
    case "super-admin":
      return redirect('/super-admin/dashboard/beranda')
      break;
    case "supervisor":
      return redirect('/supervisor/dashboard/beranda')
      break;
    case "administrator":
      return redirect('/administrator/dashboard/beranda')
      break;
    default:
      return redirect('/account/login')
  }
}
