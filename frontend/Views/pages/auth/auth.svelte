<script>
    import { Link } from 'svelte-router';
	import { token, loginError, user } from './../../../stores.js';
    import ProfileAvatar from '../../../assets/images/logo@2x.png';
    import {clickLogin} from './loginFunc.js'
    let loginMail = '';
    let loginPassword = '';
    let isLoginSave = false;
    loginError.set( `` );
</script>

<div class="authent-logo">
    <img src={ProfileAvatar} alt="">
</div>
<div class="authent-text">
    <p>Добро пожаловать в админ-панель</p>
    <p>Авторизуйтесь в свой аккаунт</p>
</div>

<form>
    <div class="mb-3">
        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" bind:value={loginMail}>
            <label for="floatingInput">Почта</label>
            </div>
    </div>
    <div class="mb-3">
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" bind:value={loginPassword}>
            <label for="floatingPassword">Пароль</label>
            </div>
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" bind:checked={isLoginSave}>
        <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
    </div>
    <div class="d-grid">
        <div class="btn btn-info m-b-xs" on:click="{clickLogin(loginMail, loginPassword)}">Войти</div>
        <!-- <div class="btn btn-primary">ВКонтакте</div> -->
        <div class="badge bg-danger loginerr" style="opacity: {$loginError}">{$loginError}</div>
    </div>
</form>
<div class="authent-reg">
    <p>Не зарегистрированы? <Link to="/register">Создать аккаунт</Link></p>
</div>