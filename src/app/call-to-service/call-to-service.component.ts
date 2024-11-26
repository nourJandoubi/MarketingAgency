import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-call-to-service',
  templateUrl: './call-to-service.component.html',
  styleUrls: ['./call-to-service.component.css']
})
export class CallToServiceComponent implements OnInit, OnDestroy {
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

    // Log current language
    console.log('Loading translations...');
    console.log(this.translate.currentLang);
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

}
