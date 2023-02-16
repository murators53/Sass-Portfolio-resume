const header = document.querySelector('header')
        window.addEventListener("scroll", function () {
            header.classList.toggle("sticky", window.scrollY > 100)
        })

        function stringKontrol(code) {
            return code.split("").reverse().join('');
        }

        // let menu = document.getElementById('menu-icon');
        let menu = document.querySelector('.bx');
        let navlist = document.querySelector('navlist');

        menu.onClick = () => {
            console.log('test');
            document.write('test')
            alert('test')
            menu.classList.toggle('bx-x');
            navlist.classList.toggle('open')
        }