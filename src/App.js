import React from 'react';
import './App.css';
import Note from './Note';

 class DisplayAllNotes extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       notes: [],
     };
   }
   nextId = () => {
     this.uniqueId = this.uniqueId || 0;
     return this.uniqueId++;
   };

   currenttime = ()=>{
     var today = new Date();
     var time =today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
     return time;
   }
   add = (text) => {
     var notes = [
       ...this.state.notes,
       {
         id: this.nextId(),
         note: text,
         time:this.currenttime(),
       },
     ];
     this.setState({ notes });
   };

   update = (newText, id) => {
     var notes = this.state.notes.map((note) =>
       note.id !== id
         ? note
         : {
             ...note,
             note: newText,
           }
     );
     this.setState({ notes });
   };

   remove = (id) => {
     var notes = this.state.notes.filter((note) => note.id !== id);
     this.setState({ notes });
   };

   eachNote = (note) => {
     return (
       console.log(note),
       (
         <Note
           key={note.id}
           id={note.id}
           onChange={this.update}
           onRemove={this.remove}
           note={note.note}
           time={note.time}
         ></Note>
       )
     );
   };

   render() {
     return (
       <div className="board">
         {this.state.notes.map(this.eachNote)}
         <button
           className="button1"
           style={{verticalAlign:"middle"}}
           onClick={() => this.add()}
         >
           Add a Note
         </button>
       </div>
     );
   }
 }

 

export default DisplayAllNotes;
