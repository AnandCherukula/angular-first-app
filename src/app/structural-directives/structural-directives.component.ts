import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  // public names=["Anand","Cherukula","Anirudh","ahtikin"]
public objects =[
  {
    id:1,
    name:'Anand',
    email:"and@xyz.com"
  },
  {
    id:2,
    name:'Nin cheppa',
    email:"and@xyz.com"
  },
  {
    id:3,
    name:'Cherukula',
    email:"and@xyz.com"
  },
  {
    id:4,
    name:'Vishnu',
    email:"and@xyz.com"
  },
  {
    id:5,
    name:'Anirudh',
    email:"and@xyz.com"
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
