document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".navigation__burger");
    const topMenu = document.querySelector(".header__navigation");
    const navigation = document.querySelectorAll(".header__navigation ul, .vacancies__button");
    const tel = document.querySelector("input[name='phone']");
    const visualBtn = document.querySelector(".input-file-btn");
    const fileInput = document.querySelector("input[type='file']");
    const form = document.querySelector("form");

    console.log(navigation);
    burger.addEventListener("click", function(e) {
        burger.classList.toggle('active');
        topMenu.classList.toggle("active");
    });

    navigation.forEach(el=>el.addEventListener("click", function(e) {
        e.preventDefault();
        console.log(e.target.classList.contains("link"));
        if (!e.target.classList.contains("link"))
            return;

        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        });
    }));

    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___)--__--___--__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = new_value.indexOf("_");
        if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i);
        }
        var reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
          !reg.test(this.value) ||
          this.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
        )
          this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
      }

      tel.addEventListener("input", mask, false);
      tel.addEventListener("focus", mask, false);
      tel.addEventListener("blur", mask, false);
      tel.addEventListener("keydown", mask, false);

      fileInput.addEventListener("change", function (e) {
        console.log('!!!');
        file = this.files[0];
        console.log(file, e.target.files);
        visualBtn.innerHTML = file.name;
    
        fileExtension = file.name.split(".").pop();
        fileSize = file.size / 1024 / 1024;
        console.log(fileSize);
      });

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log('submitted');
      });    

});
