import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isTranslationsLoaded = false;
  isArabic = false;
  private langChangeSubscription: Subscription | null = null;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.isArabic = this.translate.currentLang === 'ar';

    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event) => {
        this.isArabic = event.lang === 'ar';
      }
    );

    console.log('Loading translations...');
    console.log(this.translate.currentLang);
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
