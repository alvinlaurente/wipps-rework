export default function ({ route, redirect }) {

  const role = localStorage.getItem('role');

  switch(role) {
    case "safety-man":
      return redirect('/safety-man/dashboard')
      break;
    case "safety-inspector":
      return redirect('/safety-inspector/dashboard')
      break;
    case "super-admin":
      return redirect('/super-admin/dashboard')
      break;
    case "supervisor":
      return redirect('/supervisor/dashboard')
      break;
    case "administrator":
      return redirect('/administrator/dashboard')
      break;
    default:
      return redirect('/account/login')
  }
}
