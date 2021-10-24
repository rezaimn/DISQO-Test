import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  selectedItem = 'notepads';
  constructor(private router:Router,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.router.url,'pppppppppppppppppppppppppppp')

  }

  redirectTo(path:string){
    this.router.navigate(['/'+path]);
  }
}
