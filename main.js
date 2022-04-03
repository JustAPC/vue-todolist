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

        },

        methods: {

            removeTodo : function (todoIndex) {
                this.todoList.splice (todoIndex,1)
            }
        },
    }
) 