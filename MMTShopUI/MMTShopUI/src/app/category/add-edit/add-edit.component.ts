import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  constructor() { }
  @Input() cat:any;
  CategoryId:string="";
  CategoryName:string="";


  ngOnInit(): void {
    this.CategoryId = this.cat.CategoryId;
    this.CategoryName = this.cat.CategoryName;
  }

}
