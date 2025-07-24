<script>
    import { Link } from 'svelte-router';
	import { token, loginError, user } from './../../../stores.js';
    import ProfileAvatar from '../../../assets/images/logo@2x.png';
    import * as MainApi from 'api/MainApi';
    import {clickLogin} from './loginFunc.js'

    let registerName = '';
    let registerPassword = '';
    let registerMail = '';
    let registerPasswordCheck = '';
    loginError.set( `` );
    const clickRegister = () => {
        if(registerName && registerPassword && registerPasswordCheck && registerMail && registerPassword == registerPasswordCheck){
            const regexName = /^[a-zа-яё\-\s]+$/i;
            const regexMail = /^[^@]+@[^@.]+\.[^@]+$/;
            if (!regexName.test(String(registerName).toLowerCase()) || (registerName < 2) || (registerName > 40) ) {
                loginError.set('Некорректное имя пользователя.');
                return;
            }
            if (!regexMail.test(String(registerMail).toLowerCase())) {
                loginError.set('Некорректный email.');
                return;
            }
            if(registerPassword < 8 || registerPassword > 40){
                loginError.set('Некорректный пароль.');
                return;
            }
            MainApi.register(registerPassword, registerMail, registerName)
                .then((res) => {
                    clickLogin(registerMail, registerPassword);
                    loginError.set( `` );
                })
                .catch((err) => {
                    if (err === 400) {
                        loginError.set( `Введены неверные данные пользователя.` );
                    }
                    if (err === 409) {
                        loginError.set( `Пользователь с такими данными уже зарегистрирован.` )
                    }
                    else {
                        loginError.set('Что-то пошло не так...')
                    }
            })
        }
        else{
            loginError.set('Вы ввели не верные данные для регистрации.');
        }
  	}
</script>

<div class="authent-logo">
    <img src={ProfileAvatar} alt="">
</div>
<div class="authent-text">
    <p>Добро пожаловать в админ-панель</p>
    <p>Создайте новый аккаунт</p>
</div>

<form>
    <div class="mb-3">
        <div class="form-floating">
            <input type="text" class="form-control" id="floatingInput" placeholder="Fullname" bind:value={registerName}>
            <label for="floatingInput">Никнейм</label>
            </div>
    </div>
    <div class="mb-3">
        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput1" placeholder="name@example.com" bind:value={registerMail}>
            <label for="floatingInput">Почта</label>
        </div>
    </div>
    <div class="mb-3">
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" bind:value={registerPassword}>
            <label for="floatingPassword">Пароль</label>
        </div>
    </div>
    <div class="mb-3">
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword1" placeholder="Confirm Password" bind:value={registerPasswordCheck}>
            <label for="floatingPassword">Подтвердить пароль</label>
        </div>
    </div>
    <div class="d-grid">
        <button type="submit" class="btn btn-primary m-b-xs" on:click="{clickRegister}">Регистрация</button>
        <div class="badge bg-danger loginerr" style="opacity: {$loginError}">{$loginError}</div>
    </div>
</form>
<div class="authent-login">
    <p>Уже есть аккаунт? <Link to="/auth">Войти</Link></p>
</div>