'use scrict'

const hid = document.querySelector('.colse');
const hid2 = document.querySelector('.nav');
const mod = document.querySelector('.bar');

mod.addEventListener('click', function(){

   hid.classList.remove('hidden');
   hid2.classList.remove('hidden');
   mod.classList.add('hidden');
    
});

hid.addEventListener('click',function(){
    mod.classList.remove('hidden');
    hid.classList.add('hidden');
    hid2.classList.add('hidden');
});