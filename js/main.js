//Making it pwa
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(function(){
      console.log('ServiceWorker registered');
    });
  }
//App logic
$(document).ready(function() {
    $('.back').click(function() {
        window.location = "https://daroscode.github.io/sleeper/";
    });

    document.getElementById('currentYear').textContent = new Date().getFullYear();

    $('#calculate').click(function() {
        if($('#hour').val() != '(Hora)' && $('#minute').val() != '(Minutos)') {
            $('#start').hide();
            var setTime = new Date();

            if($('#hour').val() == 12) {
                $('#hour').val(0);
            }

            if($('#ampm').val() == "Manhã") {
                setTime.setHours($('#hour').val());
            }
            else if($('#ampm').val() == "Noite") {
                setTime.setHours(+$('#hour').val() + 12);
            }

            setTime.setMinutes($('#minute').val());

            var res1 = new Date(setTime.getTime() - 270*60000);
            var res2 = new Date(res1.getTime() - 90*60000);
            var res3 = new Date(res2.getTime() - 90*60000);
            var res4 = new Date(res3.getTime() - 90*60000);

            function retDate(dateObj) {
                var formatted = '';
                var pm = false;
                if(dateObj.getHours() > 12) {
                    formatted = dateObj.getHours() - 12;
                    pm = true;
                } else if(dateObj.getHours() < 12 && dateObj.getHours() != 0) {
                    formatted = dateObj.getHours();
                } else if(dateObj.getHours() == 0){
                    formatted = "12";
                } else if(dateObj.getHours() == 12){
                    formatted = "12";
                    pm = true;
                }
                if(dateObj.getMinutes() < 10) {
                    formatted = formatted + ":0" + dateObj.getMinutes();
                } else {
                    formatted = formatted + ":" + dateObj.getMinutes();
                }
                if(pm == true) {
                    formatted = formatted + " PM";
                } else {
                    formatted = formatted + " AM";
                }
                return formatted;
            }

            $('#result4').html(String(retDate(res1)));
            $('#result3').html(String(retDate(res2)));
            $('#result2').html(String(retDate(res3)));
            $('#result1').html(String(retDate(res4)));
    
            $('#results').fadeIn();
            $('#feedback').fadeIn();
            $('#ad').fadeIn();
        } // end hour/minute check if
        else {
            alert("Por favor, selecione um horário para calcular!");
        } // end not-filled check
    }); // end calculate

    $('#zzz').click(function() {
        $('#start').hide();
        var zDate = new Date();

        var res1 = new Date(zDate.getTime() + 104*60000);
        var res2 = new Date(res1.getTime() + 90*60000);
        var res3 = new Date(res2.getTime() + 90*60000);
        var res4 = new Date(res3.getTime() + 90*60000);
        var res5 = new Date(res4.getTime() + 90*60000);
        var res6 = new Date(res5.getTime() + 90*60000);

        function retDate(dateObj) {
            var formatted = '';
            var pm = false;
            if(dateObj.getHours() > 12) {
                formatted = dateObj.getHours() - 12;
                pm = true;
            } else if(dateObj.getHours() < 12 && dateObj.getHours() != 0) {
                formatted = dateObj.getHours();
            } else if(dateObj.getHours() == 0) {
                formatted = "12";
            } else if(dateObj.getHours() == 12) {
                formatted = "12";
                pm = true;
            }
            if(dateObj.getMinutes() < 10) {
                formatted = formatted + ":0" + dateObj.getMinutes();
            } else {
                formatted = formatted + ":" + dateObj.getMinutes();
            }
            if(pm == true) {
                formatted = formatted + " PM";
            } else {
                formatted = formatted + " AM";
            }
            return formatted;
        }

        $('#resultNow1').html(String(retDate(res1)));
        $('#resultNow2').html(String(retDate(res2)));
        $('#resultNow3').html(String(retDate(res3)));
        $('#resultNow4').html(String(retDate(res4)));
        $('#resultNow5').html(String(retDate(res5)));
        $('#resultNow6').html(String(retDate(res6)));
    
        $('#resultsNow').fadeIn();
        $('#feedback').fadeIn();
        $('#ad').fadeIn();
    });
});