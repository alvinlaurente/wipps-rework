<script>
  import InsideLoading from "@/components/InsideLoading";
  export default {
    components: {InsideLoading},
    head() {
      return {
        title: `${this.title} | Nuxtjs Responsive Bootstrap 4 Admin Dashboard`,
      };
    },
    data() {
      return {
        title: "Profil",
        items: [{
            text: "Pengguna",
          },
          {
            text: "Profil",
            active: true,
          },
        ],
        user: JSON.parse(localStorage.getItem("user")),
        isLoading: false
      };
    },
    methods: {
      setInfo() {
        document.getElementById("input-username").value = this.user.username
        document.getElementById("input-name").value = this.user.name
        document.getElementById("input-email").value = this.user.email
      },
      setPassword() {
        document.getElementById("input-new-password").value = ""
        document.getElementById("input-old-password").value = ""
      },
      hideSaveInfo() {
        this.setInfo();
        document.getElementById("btn-simpan-info").style.display = "none";
        document.getElementById("btn-cancel-info").style.display = "none";
        document.getElementById("btn-ubah-info").style.display = "";
        document.getElementById("invalid-name").style.display = "none";
        document.getElementById("invalid-username").style.display = "none";
        document.getElementById("invalid-email").style.display = "none";
        for (let element of document.getElementsByClassName("input-info")){
          element.disabled=true;
        }
      },
      showSaveInfo() {
        document.getElementById("btn-simpan-info").style.display = "";
        document.getElementById("btn-cancel-info").style.display = "";
        document.getElementById("btn-ubah-info").style.display = "none";
        for (let element of document.getElementsByClassName("input-info")){
          element.disabled=false;
        }
      },
      hideSavePass() {
        this.setPassword();
        document.getElementById("btn-simpan-pass").style.display = "none";
        document.getElementById("btn-cancel-pass").style.display = "none";
        document.getElementById("btn-ubah-pass").style.display = "";
        for (let element of document.getElementsByClassName("input-pass")){
          element.disabled=true;
        }
        document.getElementById("invalid-old-password").style.display = "none";
        document.getElementById("invalid-new-password").style.display = "none";
      },
      showSavePass() {
        document.getElementById("btn-simpan-pass").style.display = "";
        document.getElementById("btn-cancel-pass").style.display = "";
        document.getElementById("btn-ubah-pass").style.display = "none";
        for (let element of document.getElementsByClassName("input-pass")){
          element.disabled=false;
        }
      },
      verifyInfoField() {
        var valid = true;
        if (document.getElementById("input-username").value === ""){
          document.getElementById("invalid-username").style.display = "block";
          valid = false;
        } else {
          document.getElementById("invalid-username").style.display = "none";
        }

        if (document.getElementById("input-name").value === ""){
          document.getElementById("invalid-name").style.display = "block";
          valid = false;
        } else {
          document.getElementById("invalid-name").style.display = "none";
        }

        if (document.getElementById("input-email").value === ""){
          document.getElementById("invalid-email").style.display = "block";
          valid = false;
        } else {
          document.getElementById("invalid-email").style.display = "none";
        }

        return valid;
      },
      verifyPasswordField() {
        var valid = true;
        if (document.getElementById("input-old-password").value === ""){
          document.getElementById("invalid-old-password").style.display = "block";
          valid = false;
        } else {
          document.getElementById("invalid-old-password").style.display = "none";
        }

        if (document.getElementById("input-new-password").value === ""){
          document.getElementById("invalid-new-password").style.display = "block";
          valid = false;
        } else {
          document.getElementById("invalid-new-password").style.display = "none";
        }
        return valid;
      },
      submitInfo() {
        if (this.verifyInfoField()) {
          this.isLoading = true
          fetch( process.env.baseUrl + `/profile/edit`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem("token"),
            },
            body: JSON.stringify({
              username: document.getElementById("input-username").value,
              name: document.getElementById("input-name").value,
              email: document.getElementById("input-email").value
            })
          })
          .then(response => response.json())
          .then(result => {
            this.isLoading = false
            if (result.success) {
              document.getElementById("alert-message").innerText = "Ubah profil berhasil";
              document.getElementById("alert-div").style.display = "block";
              this.user = result.data
              localStorage.setItem('user', JSON.stringify(this.user));
              localStorage.setItem('name',result.data.name);
              document.getElementById('sidebar-user-name').innerText = result.data.name
              this.hideSaveInfo()
            } else {
              document.getElementById("alert-message").innerText = "Ubah profil gagal";
              document.getElementById("alert-div").style.display = "block";
              this.hideSaveInfo()
            }
          })
        }
      },
      submitPass() {
        if (this.verifyPasswordField()){
          this.isLoading = true
          fetch( process.env.baseUrl + `/profile/edit/password`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem("token"),
            },
            body: JSON.stringify({
              new_password: document.getElementById("input-new-password").value,
              old_password: document.getElementById("input-old-password").value,
              confirm_password: document.getElementById("input-new-password").value
            })
          })
          .then(response => response.json())
          .then(result => {
            this.isLoading = false
            if (result.success) {
              document.getElementById("alert-message").innerText = "Ubah password berhasil";
              document.getElementById("alert-div").style.display = "block";
              this.hideSavePass()
            } else {
              document.getElementById("alert-message").innerText = "Ubah password gagal";
              document.getElementById("alert-div").style.display = "block";
              this.hideSaveInfo()
            }
          })
        }
      },
      hideAlert() {
        document.getElementById("alert-div").style.display = "none";
      }
    },
    mounted: function () {
      const user = JSON.parse(localStorage.getItem("user"));
      this.setInfo();
      this.setPassword();
      this.hideSaveInfo();
      this.hideSavePass();
      this.hideAlert();
    },
    middleware: [
      "authentication"
    ]
};
</script>

<template>
  <div>
    <InsideLoading v-show="isLoading"/>
    <PageHeader :title="title" :items="items" />
    <div class="alert alert-warning alert-dismissible fade show" role="alert" id="alert-div">
      <h6 style="margin: 0" id="alert-message">berhasil disimpan</h6>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" v-on:click="hideAlert">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="form-group">
              <label for="input-name">Nama</label>
              <input type="text" class="form-control mb-2 input-info" placeholder="Nama" disabled id="input-name" @keyup.enter="submitInfo"/>
              <div class="invalid-feedback" id="invalid-name">
                <span>Kolom ini tidak boleh kosong.</span>
              </div>

              <label for="input-email">Email</label>
              <input type="text" class="form-control mb-2 input-info" placeholder="Email" disabled id="input-email" @keyup.enter="submitInfo"/>
              <div class="invalid-feedback" id="invalid-email">
                <span>Kolom ini tidak boleh kosong.</span>
              </div>

              <label for="input-username">Username</label>
              <input type="text" class="form-control mb-2 input-info" placeholder="Username" disabled id="input-username" @keyup.enter="submitInfo"/>
              <div class="invalid-feedback" id="invalid-username">
                <span>Kolom ini tidak boleh kosong.</span>
              </div>
            </div>

            <div class="form-group">
              <div>
                <button type="submit" class="btn btn-success" id="btn-simpan-info" v-on:click="submitInfo">Simpan</button>
                <button type="reset" class="btn btn-danger m-l-5 ml-1" id="btn-cancel-info" v-on:click="hideSaveInfo">
                  Cancel
                </button>
              </div>
            </div>

            <div class="form-group">
              <div>
                <button class="btn btn-orange" id="btn-ubah-info" v-on:click="showSaveInfo">Ubah</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="form-group">
              <label for="input-old-password">Password Lama</label>
              <input type="password" class="form-control mb-2 input-pass" placeholder="Password Lama" disabled id="input-old-password" @keyup.enter="submitPass"/>
              <div class="invalid-feedback" id="invalid-old-password">
                <span>Kolom ini tidak boleh kosong.</span>
              </div>

              <label for="input-new-password">Password Baru</label>
              <input type="password" class="form-control mb-2 input-pass" placeholder="Password Baru" disabled id="input-new-password" @keyup.enter="submitPass"/>
              <div class="invalid-feedback" id="invalid-new-password">
                <span>Kolom ini tidak boleh kosong.</span>
              </div>
            </div>

            <div class="form-group">
              <div>
                <button type="submit" class="btn btn-success" id="btn-simpan-pass" v-on:click="submitPass">Simpan</button>
                <button type="reset" class="btn btn-danger m-l-5 ml-1" id="btn-cancel-pass" v-on:click="hideSavePass">
                  Cancel
                </button>
              </div>
            </div>

            <div class="form-group">
              <div>
                <button class="btn btn-orange btn-ubah-password" id="btn-ubah-pass" v-on:click="showSavePass">Ubah</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  input[type="text"]:disabled,::placeholder  {
    color: #C2C6C7;
    opacity: 1;
  }

  .btn-orange{
    background-color: #EE7E1F;
    color: white;
  }

  .btn-orange:hover{
    background-color: #ce6b1a;
  }
</style>
