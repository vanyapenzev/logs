
import { token, loginError } from './../../../stores.js';
import { authorize } from 'api/MainApi';
import SvelteRouter from 'svelte-router';

export const clickLogin = (loginMail, loginPassword) => {
    if(loginMail && loginPassword){
        loginError.set('');
        authorize(loginPassword, loginMail)
            .then((data) => {   
                if (data.token){
                    localStorage.setItem('jwt', data.token);
                    token.set(localStorage.getItem('jwt'));
                    SvelteRouter.replace('/');
                }
                })
            .catch((err) => {
                if (err === 401) {
                    loginError.set( 'Пользователь с такой почтой не найден.' );
                } else {
                    loginError.set('Введены неверные данные пользователя.');
                }
            })
    }
    else{
        loginError.set('Вы ввели не верные данные для входа.');
    }
}