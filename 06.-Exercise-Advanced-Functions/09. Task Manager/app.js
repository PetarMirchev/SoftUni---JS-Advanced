function solve() {
    //input fields get data
    const taskBoxInput = document.getElementById("task");
    const descriptionBoxInput = document.getElementById("description");
    const dueDateBoxInput = document.getElementById("date");

    // get second 'section', second 'div' to render results in
    const openAreaTasks = document.querySelectorAll('section')[1].querySelectorAll('div')[1];
        // <section>
        //         <div>
        //             <h1 class="orange">Open</h1>
        //         </div>
        //         <div>
        //              X... <---- render point for open tasks
        //         </div>
        // </section>
     //----------------------------------------------------------- */
     const progressAreaTasks = document.querySelectorAll('section')[2].querySelectorAll('div')[1];
        // <section>
        //     <div>
        //         <h1 class="yellow">In Progress</h1>
        //     </div>
        //     <div id="in-progress">
        //           X... <---- render point for In Progress tasks
        //     </div>
        // </section>
    // -----------------------------------------------------------------
    const completeAreaTasks = document.querySelectorAll('section')[3].querySelectorAll('div')[1];
            // <section>
            //     <div>
            //         <h1 class="green">Complete</h1>
            //     </div>
            //     <div>
            //           X... <---- render point for Complete tasks
            //     </div>
            // </section>
     //-------------------------------------------------------------   
    let btnAdd = document.getElementById("add");
    btnAdd.addEventListener("click", getInputData);
    



    //get inputData & validate 
    function getInputData(e) {
        e.preventDefault(); // stop refreshing the page after post
        
        // get the data/text from the input
        let task = taskBoxInput.value;
        let description = descriptionBoxInput.value;
        let date = dueDateBoxInput.value;
    
        // validate input (empty) / if no input data
        if (!task || !description || !date){
            return;

        } else {
            // create article post
            createArticle('OpenTask','green', 'red', task, description, date);
            //debugger
        }
    }



                    // 'OpenTask', Ok-Btn, Del-Btn, "h3",  p1 , p2
    function createArticle(taskStatus, btnClass1, btnClass2, task, description, date) {
        const article = document.createElement('article');
        const h3 = document.createElement("h3");
        h3.textContent = `${task}`; // attach titul of the topic
        const p1 = document.createElement("p");
        p1.textContent = `Description: ${description}`;
        const p2 = document.createElement("p");
        p2.textContent = `Due Date: ${date}`; // attach data in created element

        //generate content in 'article' by order shown to be displayed
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);




        if (taskStatus === 'OpenTask') {
            //The article should have two buttons "Start" and "Delete". 
            //Be careful to set the classes for the buttons and the parent-div.


            const divElement = document.createElement('div');
            divElement.className = 'flex'; // <div class="flex">
            let btnStart = document.createElement('button');
            btnStart.className = btnClass1; //'green';
            btnStart.textContent = 'Start'; //<button class='green'>Start</button>
            btnStart.addEventListener('click', () => {
                deleteTask(article);
                createArticle('ProgressTask', 'red', 'orange', task, description, date);
            });

            //create Delete button
            let btnDelete = document.createElement('button');
            btnDelete.textContent = 'Delete';
            btnDelete.className = btnClass2; //'red';
            btnDelete.addEventListener('click', () => deleteTask(article));

            //create html element in DOM
            divElement.appendChild(btnStart);
            divElement.appendChild(btnDelete);
            article.appendChild(divElement);
            openAreaTasks.appendChild(article); // see comment above for 'openAreaTasks'
        }



        if (taskStatus === 'ProgressTask'){

            const divElement = document.createElement('div'); // left btn -> Delete
            divElement.className = 'flex'; // <div class="flex">
            let btnDelete = document.createElement('button');
            btnDelete.className = btnClass1; //'green';
            btnDelete.textContent = 'Delete'; //<button class='green'>Delete</button>
            btnDelete.addEventListener('click', () => { 
                deleteTask(article);
            });


            let btnFinish = document.createElement('button'); //right btn -> Finish
            btnFinish.textContent = 'Finish'; //
            btnFinish.className = btnClass2;
            btnFinish.addEventListener('click', () => {
                deleteTask(article);
                createArticle('CompleteTask', null, null, task, description, date);
            });

            //generate text in 'Complete'
            divElement.appendChild(btnDelete);
            divElement.appendChild(btnFinish);
            article.appendChild(divElement);
            progressAreaTasks.appendChild(article);
        }



        if (taskStatus === 'CompleteTask'){ // set post to last field 'Complete'
            completeAreaTasks.appendChild(article);
        }


        
        function deleteTask(article){//helper function to clear wen is need to move data
            article.remove();
        }

    }
}


