import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(["profiles"])
    }, 3000);
  }
}
