import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { NotesService } from 'src/app/core/services/notes.service';
import { Notes } from 'src/app/core/interfaces/notes';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation
} from '@costlydeveloper/ngx-awesome-popup';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  searchInput:string =''
  allNote:Notes[]= []
  constructor(public dialog: MatDialog , private _noteService:NotesService) {}
  openDialog(data?:Notes): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '600px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }

  ngOnInit(): void {
    this._noteService.getNotes().subscribe(
      {
        next: response => {
            this.allNote = response.notes
        },
        error: err => {
          this.allNote =[
            {
              title:"Add Your First Note",
              content:"Content...",
              _id:""
            }
          ]

        }
      }
    )
  }

  removeNote(id:string){
    this._noteService.deleteNote(id).subscribe
    (
      {
        next: response => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            showConfirmButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            timer:1000
          }).then(() => {
            this.ngOnInit()
          })

        },
        error: err => {
          console.log(err);
          this.openConfirmBox()
        }

      }
    )
  }

  updateNote(data:Notes,id:string){
   this.openDialog(data)
  }


  openConfirmBox() {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('Remove Note');
    newConfirmBox.setMessage("Can't Remove This Note Create your first note ");

    // Choose layout color type
    newConfirmBox.setConfig({
    layoutType: DialogLayoutDisplay.DANGER, // SUCCESS | INFO | NONE | DANGER | WARNING
    animationIn: AppearanceAnimation.SWING, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
    animationOut: DisappearanceAnimation.FLIP_OUT, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
    allowHtmlMessage: true,
    buttonPosition: 'center', // optional
    });

    newConfirmBox.setButtonLabels('Ok', '');

    // Simply open the popup and observe button click
    newConfirmBox.openConfirmBox$().subscribe(resp => {
      if(resp.clickedButtonID){
        console.log('Button clicked: ', resp.clickedButtonID);
      }
    });
}

}
