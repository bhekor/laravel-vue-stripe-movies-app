import Api from './Api'

export default {
    register(form){ 
        return Api().post('/register', form)
    },
    
    login(form){ 
        return Api().post('/login', form)
    },
    
    logout(form){
        return Api().post('/logout')
    },

    auth(){
        return Api().get('/user')
    }
}