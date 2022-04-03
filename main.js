var app = new Vue(
    {
        el: "#root",
        data: {
            todoList: [
                {
                  'text' : 'ciao',
                  'done' : false  
                },
                {
                  'text' : 'ciao',
                  'done' : false  
                },
                {
                  'text' : 'ciao',
                  'done' : false  
                },
                {
                  'text' : 'ciao',
                  'done' : false  
                }
            ],

            nuovoTodo: '',
        },

        methods: {

            removeTodo : function (todoIndex) {
                this.todoList.splice (todoIndex,1)
            },

            addTodo : function (){

                let oggTodo = {
                    text: this.nuovoTodo,
                    done: false
                }
                if (this.nuovoTodo.length > 0) {
                    this.todoList.push(oggTodo)
                    this.nuovoTodo = ''
                } else {
                    alert("Attenzione a quello che hai scritto come nuovo todo!")
                }
            },

            done : function (element) {
                element.done = true;
            }

        },
    }
) 