var Notes = {
  filter: '',
  search: '',
  current: {message: ''},
  list: [
    {message: 'message 1'},
    {message: 'message 2'},
    {message: 'message 3'},
    {message: 'message 4'},
    {message: 'message 5'},
    {message: 'message 6'}
  ]
}

// FIXME: Do not use Vue as a Global Variable. Use it importing the library with CommonJS standard.
new Vue({
  el: '#app',
  data: Notes,
  methods: {
    add: function(){
      var newNote = {
        message: 'New note'
      };
      this.list.push(newNote);
      this.current = newNote;
    },
    edit: function(index){
      this.current = this.list[index];
    },
    remove: function(index){
      this.list.splice(index, 1)
      this.current = {}
    }
  }
})