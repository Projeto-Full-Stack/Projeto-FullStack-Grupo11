import { Injectable } from '@nestjs/common';
import { async } from 'rxjs';

@Injectable()
export class AuthService {
    constructor ( private: UserService: UserService ){}

        async validateUser ( userEmail: string, userPassword: string ) {
            const user = await this.userService.findByEmail(userEmail)
           if (user) {
                const passwordMatch = await compare(userPassword, user.password)
                if(passwordMatch){
                    return { email: user.email };
                }
           }
         
        return null;
        }
    
}
