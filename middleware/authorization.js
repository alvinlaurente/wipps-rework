export default function ({ route, redirect }) {

  const role = localStorage.getItem('role');

  switch(role) {
    case "safety-man":
      return redirect('/safety-man/dashboard/dashboard')
      break;
    case "safety-inspector":
      return redirect('/safety-inspector/dashboard/dashboard')
      break;
    case "super-admin":
      return redirect('/super-admin/dashboard/dashboard')
      break;
    case "supervisor":
      return redirect('/supervisor/dashboard/dashboard')
      break;
    case "administrator":
      return redirect('/administrator/dashboard/dashboard')
      break;
    default:
      return redirect('/account/login')
  }
}
