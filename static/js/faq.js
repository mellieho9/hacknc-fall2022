var acc = document.getElementsByClassName("accordion");
        var i;
        var questions = document.getElementsByClassName("panel");

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var shell = this.children[0];
                shell.classList.toggle("spin");
                var panel = this.nextElementSibling;
                let maxHeight = window.getComputedStyle(panel).maxHeight;
                console.log(maxHeight);
                console.log(panel.style.maxHeight)
                if (maxHeight !== '0px') {
                    panel.style.maxHeight = 0;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    for (let j= 0; j<questions.length; j++) {
                        if (i !== j && window.getComputedStyle(questions[j]).maxHeight !== '0px') {
                            questions[j].style.maxHeight = 0;
                            questions[j].previousElementSibling.classList.toggle("active")
                        }
                    }
                }
                removeSpin(shell);
            });
        }

        function removeSpin(shell){
            delay(500);
            shell.classList.toggle("spin");
        }