//todo
//1. DOMContentLoaded listener
//2. Wrap everything in challenge.js
//3. Make event listener on document
//4. Use if with each element
//5. behavior for each button

document.addEventListener("DOMContentLoaded", function(){
    let number = 0;
    let counter = document.querySelector('#counter');

    let likeUL = document.querySelector('.likes');
    let likeList = likeUL.children;
    
    function startCounter() {
        setInterval(function(){
            number++;
            counter.innerText = number;
        }, 1000);
    }

    startCounter();

    function decrementor() {
        number--;
        counter.innerText = number;
    }

    function incrementor() {
        number++;
        counter.innerText = number;
    }

    function newlikeLi(){
        let li = document.createElement('li');
        li.dataset.num = number;
        li.dataset.likes = 1;
        li.innerText = `Number ${number} has been liked ${li.dataset.likes} times.`
        likeUL.append(li);
    }

    function liker() {
        //create a new element
        //change content fo that element to: "Number ${number} has been liked ${likes} times."
        

        // if !!document.querySelector(`[data-num = ${number}]`){
        if(likeList.length > 0) {
            for(const like in likeList){
                let num = parseInt(like.dataset.num, 10) // change into integer to compare with number
                if (num === number) {
                    likes = parseInt(like.dataset.likes, 10);
                    likes++;
                    like.dataset.likes = likes;
                    like.innerText = `Number ${like.dataset.num} has been liked ${like.dataset.likes} times.`
                } else {
                    newlikeLi();
                }
            }
        } else {
            newlikeLi();



            // if (like.dataset.num === number) {
            //         like.dataset.likes = parseInt(like.dataset.likes, 10);
            //         like.dataset.likes++;
            //         like.innerText = `Number ${like.dataset.num} has been liked ${like.dataset.likes} times.`
            //     }
            
        }
        
    }
    


    document.addEventListener("click", function(e){
        let button = e.target;
        
        if (button === document.getElementById('minus')) {
            decrementor();
        } else if(button === document.getElementById('plus')) {
            incrementor();
        } else if (button === document.getElementById('heart')) {
            liker();
        } else if (button === document.getElementById('pause')) {

        } else if (button === document.getElementById('submit')) {
            button.preventDefault();
        }
    });
    
    

});