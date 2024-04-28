import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Notes } from 'src/app/core/interfaces/notes';
import { NotesService } from 'src/app/core/services/notes.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  errMsg:string = ""
  constructor(private _notesServices:NotesService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Notes,
  ){}

  AddNote:FormGroup = new FormGroup({
    title:new FormControl(this.data ? this.data.title : ""),
    content:new FormControl(this.data ? this.data.content : "")
  })
  handleForm(){
    if(!this.data){
     this.addNote()
    }else{
      this.updateNote()
    }

  }

addNote(){
  this._notesServices.addNote(this.AddNote.value).subscribe({
    next: (response) => {
      this.dialogRef.close();
    },
    error: (err) => {
      if(err.error.msg){
        this.errMsg = "Title & Content is Valid"
      }
    }
  })
}
updateNote(){
this._notesServices.updateNote(this.AddNote.value , this.data._id).subscribe({
  next: respone => {
    this.dialogRef.close();
  },
  error : err => {
    if(err.error.msg){
      this.errMsg = "Can't Update Here Add Your First Note :)"
    }
  }
})
}

}
