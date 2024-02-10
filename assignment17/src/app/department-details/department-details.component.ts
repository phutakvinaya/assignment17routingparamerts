import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css'
})
export class DepartmentDetailsComponent implements OnInit{
public departmentId:any;
constructor(private router:Router,private route:ActivatedRoute){}

ngOnInit() 
{
  this.route.paramMap.subscribe((params: ParamMap) => {
    let id = parseInt(params.get('id')!);
    this.departmentId = id;

  });
}

gotoDepartments() 
{
  let selectedId = this.departmentId ? this.departmentId : null;
  this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
}
}
