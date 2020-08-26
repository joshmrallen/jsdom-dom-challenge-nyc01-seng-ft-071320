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
        console.log('app is creating a new like')
        let li = document.createElement('li');
        li.dataset.num = number;
        li.dataset.likes = 1;
        li.innerText = `Number ${number} has been liked ${li.dataset.likes} times.`
        likeUL.append(li);
        console.log('new like was added to DOM')
    }

    function showLike(){
        //we check that only new likes are logegd 
    }

    function liker() {
        console.log(likeList)
        if(likeList.length > 0) {
            console.log('jump to the need to create + compare')
            let li = document.createElement('li');
            // li.dataset.num = number;
            li.dataset.likes = 1;
            // li.innerText = `Number ${li.dataset.num} has been liked ${li.dataset.likes} times.`
            console.log('56: new li created but not compared')
            console.dir(li)

            
            if(li.matches(`[data-num="${number}"]`)){
                console.log('just compared, found them equal')
                let updatedLike = document.querySelector(`[data-num="${number}"]`)
                let newLikes = parseInt(updatedLike.dataset.likes, 10) 
                newLikes++
                updatedLike.dataset.likes = newLikes
                console.log('about to update existing like with +1')
                updatedLike.innerText = `Number ${updatedLike.dataset.num} has been liked ${updatedLike.dataset.likes} times.`
            } else {
                console.log('created a new like, already compared, doesnt already exist')
                li.dataset.num = number;
                 li.innerText = `Number ${li.dataset.num} has been liked ${li.dataset.likes} times.`
                likeUL.append(li)
            }
            
        } else {
            console.log('app thinks there no likes')
            newlikeLi();
        } 
    }
            // for(const like of likeList){
            //     console.log('about to compare')
            //     console.log(like.dataset.num) 
            //     console.log(li.dataset.num) 
            //    if(like.dataset.num === li.dataset.num){
            //         console.log('liked the same thing twice')
            //         let numLike = parseInt(like.dataset.likes, 10) 
            //         numLike++
            //         like.dataset.likes = numLike
            //         console.log(like.dataset.likes)
            //         like.innerText = `Number ${like.dataset.num} has been liked ${like.dataset.likes} times.`
            //    } else {
            //         console.log('69: like a new thing, but not the first thing')
            //         likeUL.append(li)
            //    };
            // }
    


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