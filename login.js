document.getElementById('login-button').addEventListener('click',function(){
    const userInputField = document.getElementById('user-input');
    const userInput = userInputField.value;
    
    const passInputField = document.getElementById('pass-input');
    const passInput = passInputField.value;
    
    userInputField.value = '';
    passInputField.value = '';
    
    if(userInput == 'admin' && passInput == 'admin'){
        window.location.href = 'home.html';
    }
    else{
        window.location.href = 'error.html';
    }
    
    })

// function _0x5a2f(_0x59a762,_0xa2a9dd){const _0x4dc4f3=_0x4dc4();return _0x5a2f=function(_0x5a2f9f,_0x40bb74){_0x5a2f9f=_0x5a2f9f-0xe1;let _0x3d2ae1=_0x4dc4f3[_0x5a2f9f];return _0x3d2ae1;},_0x5a2f(_0x59a762,_0xa2a9dd);}function _0x4dc4(){const _0x1c0b82=['error.html','location','12520736XuFTnL','215FUBPUB','101535XxGRoV','1612320Dhvpqc','getElementById','21216rHjIhK','pass-input','admin','182796IXLpXI','value','href','2804280BTmTua','444419twTGRR'];_0x4dc4=function(){return _0x1c0b82;};return _0x4dc4();}const _0x407a35=_0x5a2f;(function(_0x569ad2,_0x4255fa){const _0xb8ad99=_0x5a2f,_0xef888e=_0x569ad2();while(!![]){try{const _0x14591b=parseInt(_0xb8ad99(0xe4))/0x1+parseInt(_0xb8ad99(0xea))/0x2+parseInt(_0xb8ad99(0xe3))/0x3+parseInt(_0xb8ad99(0xef))/0x4+-parseInt(_0xb8ad99(0xe8))/0x5*(parseInt(_0xb8ad99(0xec))/0x6)+parseInt(_0xb8ad99(0xe9))/0x7+-parseInt(_0xb8ad99(0xe7))/0x8;if(_0x14591b===_0x4255fa)break;else _0xef888e['push'](_0xef888e['shift']());}catch(_0x46b5c4){_0xef888e['push'](_0xef888e['shift']());}}}(_0x4dc4,0x81013),document[_0x407a35(0xeb)]('login-button')['addEventListener']('click',function(){const _0x402f87=_0x407a35,_0x2dbb11=document[_0x402f87(0xeb)]('user-input'),_0x174f70=_0x2dbb11[_0x402f87(0xe1)],_0x5f119d=document[_0x402f87(0xeb)](_0x402f87(0xed)),_0x5d4d2=_0x5f119d['value'];_0x2dbb11[_0x402f87(0xe1)]='',_0x5f119d[_0x402f87(0xe1)]='',_0x174f70==_0x402f87(0xee)&&_0x5d4d2=='admin'?window[_0x402f87(0xe6)][_0x402f87(0xe2)]='home.html':window[_0x402f87(0xe6)][_0x402f87(0xe2)]=_0x402f87(0xe5);}));