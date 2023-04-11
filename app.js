window.onload = function(){
    var hub = document.getElementById('hub');
    var icon = document.getElementById('icon');
    var sidebar = document.getElementById('sidebar');
    var ul = document.getElementById('list');
    var elements;
    var draggable = document.getElementById('draggable');
    var orario = document.getElementById('div-orario');
    var buttons = document.getElementsByClassName('close-btn');
    var date = new this.Date();
    

    // get the curreent week day 

    var weekday = new Array(7);
    weekday[0] = "Domenica";
    weekday[1] = "Lunedi";
    weekday[2] = "Martedi";
    weekday[3] = "Mercoledi";
    weekday[4] = "Giovedi";
    weekday[5] = "Venerdi";
    weekday[6] = "Sabato";

    var elem;

    switch (weekday[date.getDay()]){
        case 'Lunedi':
            elem = this.document.getElementById('day-2').children;
            for(var c = 0; c < elem.length; c++){
                elem.item(c).classList.add('current-day');
            }
        break;

        case 'Martedi':
            elem = this.document.getElementById('day-3').children;
            for(var c = 0; c < elem.length; c++){
                elem.item(c).classList.add('current-day');
            }
        break;

        case 'Mercoledi':
            elem = this.document.getElementById('day-4').children;
            for(var c = 0; c < elem.length; c++){
                elem.item(c).classList.add('current-day');
            }
        break;

        case 'Giovedi':
            elem = this.document.getElementById('day-5').children;
            for(var c = 0; c < elem.length; c++){
                elem.item(c).classList.add('current-day');
            }
        break;

        case 'Venerdi':
            elem = this.document.getElementById('day-6').children;
            for(var c = 0; c < elem.length; c++){
                elem.item(c).classList.add('current-day');
            }
        break;

        case 'Sabato':
        case 'Domenica':
            elem = this.document.getElementById('day-1').children;
            for(var c = 0; c < elem.length; c++){
                elem.item(c).classList.add('current-day');
            }
        break;
    }

    
    

    // disable text selection
 /*   for(var c = 0; c < document.getElementsByTagName('p').length; c++){
        this.document.getElementsByTagName('p').item(c).onselect
    }  */




    // close sidebar on document click  
 /*
    this.document.onclick = function(e){
        if((sidebar.getAttribute('status') == 'opened') && (e.target.id !== sidebar.id)){
            sidebar.setAttribute('status', 'closed');
                for(var c = 0; c <= ul.children.length - 1; c++){
                    document.getElementById('element_' + c).setAttribute('status', 'closed');
                    document.getElementById('p_' + c).setAttribute('status', 'invisible');
                }
                hub.setAttribute('status', 'closed');
                icon.classList.remove('fa-rotate-90');
                icon.classList.add('normal');
                console.log('closed');
        }
    }  */


    hub.onclick = function(){
        let status = sidebar.getAttribute('status');
        switch(status){
            case 'closed':
                sidebar.setAttribute('status', 'opened');
                for(var c = 0; c <= ul.children.length - 1; c++){

		    if(c !== 0){
		    document.getElementById('element_' + c).setAttribute('status', 'opened');
		    }
                    document.getElementById('p_' + c).setAttribute('status', 'visible');
                }

                hub.setAttribute('status', 'opened');
                icon.classList.add('fa-rotate-90');
                icon.classList.remove('normal');
                console.log('opened');
            break;
            case 'opened':
                sidebar.setAttribute('status', 'closed');
                for(var c = 0; c <= ul.children.length - 1; c++){
                    if(c !== 0){
		    document.getElementById('element_' + c).setAttribute('status', 'closed');
		    }
                    document.getElementById('p_' + c).setAttribute('status', 'invisible');
                }
                hub.setAttribute('status', 'closed');
                icon.classList.remove('fa-rotate-90');
                icon.classList.add('normal');
                console.log('closed');
            break;
        }
    }

    this.console.log(ul);
    this.console.log(sidebar);

    for(var c = 1; c <= ul.children.length - 1; c++){
        this.document.getElementById('element_' + c).onclick = function(e){
            
          switch(e.target.id){
              case 'element_1':
              case 'icon-orario':  
              case 'p_1':        
                  _orario();
                break;
              case 'element_2':
              case 'icon-compiti':  
              case 'p_2':
                  _compiti();
                break;
              case 'element_3':
                 //   orario();
                break;
              case 'element_4':
                  //  orario();
                break;
              case 'element_5':
                  //  orario();
                break;
          }
        }
    }

    function _orario(){
        let a = document.getElementById('div-orario');
        if(a.getAttribute('status') == 'invisible'){
            a.setAttribute('status', 'visible');
        }else{
            a.setAttribute('status', 'invisible');
        }
    }

    function _compiti(){
        let a = document.querySelectorAll('[status="normal"]');
        if(a.length >= document.getElementsByClassName('compiti').length){
            console.log('returned :(');
            return;
        }

        let count = document.getElementsByClassName('compiti').length - a.length;

        document.getElementsByClassName('tab_' + count).item(0).setAttribute('status', 'normal');
    }


    
       
     
    // orario element

    
    
    
}