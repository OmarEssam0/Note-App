import { Pipe, PipeTransform } from '@angular/core';
import { Notes } from '../interfaces/notes';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allNote:any[], value:string):any {
    return allNote.filter((note)=> note.title.toLowerCase().includes(value.toLowerCase()))


}
}
