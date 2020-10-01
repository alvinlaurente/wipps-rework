export default function ({ app, store, redirect }) {
    let role = null;
    if(store.state.user!=null){
        if(store.state.user.role!==undefined){
            role = store.state.user.role.name
        }
    }
    if(role==null){
        return redirect('/login');
    }
    let allowed = true;
    let value = 'super-admin,administrator,safety-inspector,safety-man,supervisor';
    let requirements = value.split(',');
    allowed = false;
    for(let i in requirements){
        if(role === requirements[i]){
            allowed=true;
        }
    }
    if(!allowed){
        return redirect('/dashboard');
    }
}
