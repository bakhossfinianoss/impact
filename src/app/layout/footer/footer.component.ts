import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/back-office/login/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showComponent = true;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.showComponent$.subscribe( res => {
      this.showComponent = res;
    })
  }

}
