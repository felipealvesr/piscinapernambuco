//$(window).scroll(function() {
        //	if($(window).scrollTop() + $(window).height() > $(document).height() -100) {
            var Time = 10;
            document.getElementById("countText").innerText = Time;
            var cont = setTimeout(function () {
                Time--;
                document.getElementById("countText").innerText = Time;
            }, 1000);
    
            var CountTimer = setInterval(function () {
                --Time;
                document.getElementById("countText").innerText = Time;
                if (Time <= 05) {
                    Time = 05;
                }
            }, 20000);
                 //	}
              //});