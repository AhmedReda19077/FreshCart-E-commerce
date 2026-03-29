import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/services/flowbite/flowbite';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgxSpinnerModule, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('E-commerce');
  constructor(private flowbiteService: FlowbiteService) { }
  private translate = inject(TranslateService);

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

}
