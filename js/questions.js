(function(){

    const titleQuestions = [...document.querySelectorAll('.questions_title')];

    const pausa=[...document.querySelectorAll('.pausa_1')];
    
    console.log(titleQuestions)

    console.log('hola mundo')


    // pausa.addEventListener('click',()=>{

    //     pausa.play()
        

    // });

    titleQuestions.forEach(questions =>{

        questions.addEventListener('click',()=>{

                let height = 0;

                let answer = questions.nextElementSibling;
                
                if(answer.clientHeight ===0){
    
                    height = answer.scrollHeight;
    
                }
                answer.style.height = `${height}px`    
                
                
               
        });


    });


})();
