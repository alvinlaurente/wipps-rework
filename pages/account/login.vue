<template>
  <div id="login-component" class="row align-items-center justify-content-center">
    <div class="account-pages my-5 pt-sm-5 mt-0 col-11 col-sm-12">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card">
              <div class="card-body p-4">
                <div class="row align-items-center justify-content-center">
                  <div class="auth-logo text-center">
                    <img src="~/assets/images/logo.png" alt="WIPPS" height="100" class="logo" />
                    <h5 class="mt-3" id="ru-location">RU IV Cilacap</h5>
                  </div>
                </div>
                <div class="p-2 mt-1">
                  <div hidden class="alert alert-danger" role="alert" id="alert-auth-error"></div>
                  <b-form-group id="input-username-group" label="Username" label-for="input-username">
                    <b-form-input id="input-username" v-model="username" type="text" placeholder="Masukkan Username" value="" @keyup.enter="loginBtn"></b-form-input>
                  </b-form-group>
                  <b-form-group id="input-password-group">
                    <div class="float-right">
                      <p class="text-muted m-0 cursor-pointer" id="toggle-show-password" v-on:click="toggleShowPassword" @mouseover="toggleShowPasswordMouseOver" @mouseleave="toggleShowPasswordMouseLeave">perlihatkan password</p>
                    </div>
                    <label for="input-password">Password</label>
                    <b-form-input id="input-password" v-model="password" type="password" placeholder="Masukkan Password" value="" @keyup.enter="loginBtn"></b-form-input>
                  </b-form-group>
                  <button type="button" class="btn btn-primary col-12" v-on:click="loginBtn()">MASUK</button>
                </div>
                <div class="row justify-content-center">
                  <img src="~/assets/images/logo-pertamina.png" alt="WIPPS" height="80"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  authFackMethods
} from "~/store/helpers";

export default {
  layout: "auth",
  name: "login",
  middleware: "authentication",
  methods: {
    ...authFackMethods,
    toggleShowPassword: function () {
      const passForm = document.getElementById("input-password");
      const passToggle = document.getElementById("toggle-show-password");
      if (passToggle.innerText === "perlihatkan password") {
        passForm.type = "text";
        passToggle.innerText = "sembunyikan password";
      } else {
        passForm.type = "password";
        passToggle.innerText = "perlihatkan password";
      }
    },
    toggleShowPasswordMouseOver: function () {
      const passToggle = document.getElementById("toggle-show-password");
      passToggle.classList.remove("text-muted");
    },
    toggleShowPasswordMouseLeave: function () {
      const passToggle = document.getElementById("toggle-show-password");
      passToggle.classList.add("text-muted");
    },
    loginBtn: function () {
      const username = document.getElementById("input-username").value;
      const password = document.getElementById("input-password").value;
      const alert = document.getElementById("alert-auth-error");
      if (username === "" || password === "") {
        alert.innerText = "Username dan Password tidak boleh kosong"
        alert.hidden = false;
      } else {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        };

        return fetch( process.env.baseUrl + `/login`, requestOptions)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json()
          })
          .then(result => {
            if (!result.success) {
              alert.innerText = "Username atau Password salah"
              alert.hidden = false;
            } else {
              localStorage.setItem('user', JSON.stringify(result.user));
              localStorage.setItem('name',result.user.name);
              localStorage.setItem('token', result.token);
              localStorage.setItem('role', result.user.role.name)
              this.$router.push({
                path: "/",
              });
            }
          })
          .catch(error => {
            alert.innerText = error
            alert.hidden = false;
          })
      }
    }
  },
  mounted: function () {
    if (process.env.ru==='') {
      localStorage.setItem("ru",window.location.origin.substring(window.location.protocol.length+2,window.location.protocol.length+5))
      switch (localStorage.getItem("ru")) {
        case "ru2":
          document.getElementById("ru-location").innerText = "RU II Dumai"
          break
        case "ru3":
          document.getElementById("ru-location").innerText = "RU III Plaju"
          break
        case "ru4":
          document.getElementById("ru-location").innerText = "RU IV Cilacap"
          break
        case "ru5":
          document.getElementById("ru-location").innerText = "RU V Balikpapan"
          break
        default:
          document.getElementById("ru-location").innerText = "RU VI Balongan"
          localStorage.setItem("ru","ru6")
          break
      }
    } else {
      localStorage.setItem("ru",process.env.ru)
    }
  },
  data() {
    return {
      username: "",
      password: ""
    }
  }
}
</script>

<style scoped>
  #login-component {
    height: 100vh;
    width: 100vw;
    background: url('~assets/images/background-login.jpg') no-repeat center fixed;
    background-size: cover;
    margin: 0;
  }
  .account-pages {
    margin: 0 !important;
    padding: 0 !important;
  }
</style>
