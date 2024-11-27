import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'S-Branding';
  isCollapsed = true;
  isTranslationsLoaded = false;
  showNavbar: boolean = true;
  isNavbarOpen: boolean = false;
  showFullNavbar: boolean = true;
  // Map section IDs to dynamic titles
  private sectionTitles: { [key: string]: string } = {
    hero: 'S-Branding - Home',
    about: 'S-Branding - About Us',
    service: 'S-Branding - Services',
    pricing: 'S-Branding - Pricing',
    team: 'S-Branding - Team',
    contact: 'S-Branding - Contact Us',
  };

  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private router: Router,

    private viewportScroller: ViewportScroller,
    private activatedRoute: ActivatedRoute
  ) {
    this.translate.setDefaultLang('en');
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;

    const navbar = document.getElementById('navbar');

    const toggleIcon = document.querySelector('.mobile-nav-toggle');

    if (navbar) {
      if (this.isNavbarOpen) {
        navbar.classList.add('navbar-mobile');
        if (toggleIcon) {
          toggleIcon.classList.remove('bi-list');
          toggleIcon.classList.add('bi-x');
        }
      } else {
        navbar.classList.remove('navbar-mobile');
        if (toggleIcon) {
          toggleIcon.classList.remove('bi-x');
          toggleIcon.classList.add('bi-list');
        }
      }
    }
  }

  updateNavbarVisibility() {
    // Show full navbar only if the current path is the main path
    this.showFullNavbar =
      this.router.url === '/' || this.router.url === '/home';
  }

  ngOnInit(): void {
    this.translate.use('en').subscribe(() => {
      this.isTranslationsLoaded = true;
    });

    this.translate.onLangChange.subscribe(() => {
      this.isTranslationsLoaded = true;
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Check if the current route is the 404 page
        const currentRoute = this.router.url;
        this.showNavbar = !currentRoute.includes('404NotFound'); // Hide navbar for 404 routes
      });

    // Subscribe to router events to detect path changes
    this.router.events.subscribe(() => {
      this.updateNavbarVisibility();
    });
    this.updateNavbarVisibility();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = Object.keys(this.sectionTitles);
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && this.isElementInViewport(element)) {
        this.titleService.setTitle(this.sectionTitles[section]);
        break;
      }
    }
  }

  private isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  switchLanguage(): void {
    const language = this.translate.currentLang === 'en' ? 'ar' : 'en';
    this.isTranslationsLoaded = false;
    this.translate.use(language).subscribe(() => {
      this.isTranslationsLoaded = true;
    });
  }

  openWhatsApp(): void {
    console.log('Opening WhatsApp...');
    window.open('https://wa.me/+905540148868', '_blank');
  }

  scrollTo(targetId: string) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Auto-close navbar in mobile view
    const navbar = document.getElementById('navbar');
    const toggleIcon = document.querySelector('.mobile-nav-toggle');

    if (navbar && window.innerWidth <= 768) {
      navbar.classList.remove('navbar-mobile');
      if (toggleIcon) {
        toggleIcon.classList.remove('bi-x');
        toggleIcon.classList.add('bi-list');
      }
    }

    this.isNavbarOpen = false;
  }
}
