import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import  { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(public afAuth:AngularFireAuth){
        
    }
    
    // Login the user
    login(email:string, password:string){
        return new Promise((resolve, reject) => {
            this.afAuth.auth.signInWithEamilAndPassword(email, password)
                .then(userData => resolve(userData),
                err => reject(err));
        });    
    }
    
    // Check the user status
    getAuth(){
        return this.afAuth.authState.map(auth => auth);
    }
    
    // Logout the user
    logout(){
        this.afAuth.auth.signOut();
    }
}
