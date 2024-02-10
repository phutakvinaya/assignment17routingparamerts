import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit{
  public selectedId : any;
  departments = [
    {"id": 1, "name": "Dev"},
    {"id": 2, "name": "Testing"},
    {"id": 3, "name": "Quality Assurance"},
    {"id": 4, "name": "Support"},
    {"id": 5, "name": "Back Office"}
  ]

  constructor(private router:Router,private route:ActivatedRoute)
  { }
  ngOnInit() {
    debugger;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.selectedId = id;
    } );
  }

  onSelect(department : any) 
  {
    debugger;
     this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department : any) 
  { 
    debugger
    return department.id === this.selectedId; }
}
