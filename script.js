 let b = document.getElementById("big")
        let c = document.getElementById("cv")


        function gen_cv() {
            b.style.display = "none";
            c.style.display = "flex";

            let n = document.getElementById("name").value
            let n1 = document.getElementById("f")
            n1.innerText = n;
            let s = document.getElementById("last").value
            let s1 = document.getElementById("l")
            s1.innerText = s;
            let mn = document.getElementById("mob").value
            let mn1 = document.getElementById("m")
            mn1.innerText = mn;
            let em = document.getElementById("email").value
            let em1 = document.getElementById("em")
            em1.innerText = em;
            let a = document.getElementById("add").value
            let a1 = document.getElementById("a")
            a1.innerText = a;
            let q = document.getElementById("q").value
            let q1 = document.getElementById("q1")
            q1.innerText = q;
            let u = document.getElementById("u").value
            let u1 = document.getElementById("u1")
            u1.innerText = u;
            let y = document.getElementById("y").value
            let y1 = document.getElementById("y1")
            y1.innerText = y;
            let i = document.getElementById("i").value
            let i1 = document.getElementById("i1")
            i1.innerText = i;
            let p = document.getElementById("p").value
            let p1 = document.getElementById("p1")
            p1.innerText = p;
            let t = document.getElementById("t").value
            let t1 = document.getElementById("t1")
            t1.innerText = t;
            let l = document.getElementById("lang").value
            let l1 = document.getElementById("lang1")
            l1.innerText = l;
        }