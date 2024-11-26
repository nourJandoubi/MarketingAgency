import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  isTranslationsLoaded = false;
  isArabic = false;
  private langChangeSubscription: Subscription | null = null;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // Set initial value based on current language
    this.isArabic = this.translate.currentLang === 'ar';

    // Subscribe to language change events
    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event) => {
        this.isArabic = event.lang === 'ar';
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
