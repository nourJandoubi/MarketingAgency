// src/app/service-detail/service-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css'],
})
export class ServiceDetailComponent implements OnInit {
  serviceId: number | undefined | any;
  tableData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) {}
  // Define the data directly within the component
  SERVICES_DATA = {} as any;

  SERVICES_DATA_ENGLISH = {
    'our-Branding-Services': {
      image: 'assets/img/design.jpg',
      description: 'Our Branding Services',
      summary:
        'Establish a strong and unique identity for your business with our expert branding services. From logo design and color selection to complete branding materials, we provide packages tailored to meet your specific needs. Choose from Basic, Silver, or Golden packages to elevate your brand with cohesive, high-quality designs that make a lasting impression.',
      columns: ['Service', 'Basic', 'Silver', 'Golden'],
      rows: [
        {
          service: 'Logo Design + Colors + Fonts',
          basic: '2',
          silver: '3',
          golden: '4',
        },
        {
          service: 'Company Catalogue',
          basic: '-',
          silver: 'Included',
          golden: 'Included',
        },
        {
          service: 'Business Cards Design',
          basic: 'Included',
          silver: 'Included',
          golden: 'Included',
        },
        {
          service: 'Roll-up Banners + Bag Designs',
          basic: '-',
          silver: 'Included',
          golden: 'Included',
        },
        {
          service: 'Social Media Templates',
          basic: '2',
          silver: '5',
          golden: '10',
        },
        {
          service: 'Employee Badges Design',
          basic: 'Included',
          silver: 'Included',
          golden: 'Included',
        },
        { service: 'Fees', basic: '$300+', silver: '$400+', golden: '$600+' },
      ],
    },
    'social-media-design': {
      image: 'assets/img/socialmedia.jpg',
      description: 'Our Social Media Management Services',
      summary:
        'Maximize your online presence with our expert social media management services. Whether you’re looking for essential content creation or comprehensive multi-platform management, our packages ensure engagement, growth, and customer satisfaction. Choose our Golden package for advanced features like call center training and tailored ad campaigns.',
      columns: ['Service', 'Basic', 'Silver', 'Golden'],
      rows: [
        {
          service: 'Content Creation + Post Design',
          basic: '10 posts/month',
          silver: '15 posts/month',
          golden: '25 posts/month',
        },
        {
          service: 'Platform Management',
          basic: '1 Platform',
          silver: '2 Platforms',
          golden: '3 Platforms',
        },
        {
          service: 'Managing Comments & Messages',
          basic: 'Included',
          silver: 'Included',
          golden: 'Included',
        },
        {
          service: 'Performance Analytics',
          basic: 'Basic',
          silver: 'Detailed',
          golden: 'Advanced',
        },
        {
          service: 'Ad Campaign Setup',
          basic: '-',
          silver: 'Included',
          golden: 'Included',
        },
        {
          service: 'Call Center Training',
          basic: '-',
          silver: '-',
          golden: 'Included',
        },
        { service: 'Fees', basic: '$300+', silver: '$450+', golden: '$700+' },
      ],
    },
    'web-dev': {
      image: 'assets/img/webDev.png',
      description: 'Our Web Development Services',
      summary:
        'Build a professional online presence with our web development services. From simple WordPress solutions to fully customized websites, we offer packages that cater to your needs. With the Golden package, enjoy advanced features like multi-language support, custom programming, and extended technical support.',
      columns: ['Service', 'Basic', 'Silver', 'Golden'],
      rows: [
        {
          service: 'Website Type',
          basic: 'WordPress Template',
          silver: 'Custom Template',
          golden: 'Custom Multi-Language',
        },
        {
          service: 'Number of Pages',
          basic: 'Up to 4',
          silver: 'Up to 8',
          golden: 'Up to 12',
        },
        {
          service: 'Languages Supported',
          basic: '2',
          silver: '3',
          golden: '4',
        },
        {
          service: 'Domain & Hosting',
          basic: '1 Year',
          silver: '1 Year',
          golden: '2 Years',
        },
        {
          service: 'Training for Website Panel',
          basic: '1 Hour',
          silver: '1 Hour',
          golden: '2 Hours',
        },
        {
          service: 'Technical Support',
          basic: '1 Month',
          silver: '3 Months',
          golden: '6 Months',
        },
        { service: 'Fees', basic: '$800', silver: '$1200', golden: '$1900' },
      ],
    },
    marketing: {
      image: 'assets/img/marketing2.png',
      description: 'Our Marketing Strategy Services',
      summary:
        'Achieve your business goals with our result-driven marketing strategies. From audience research to personalized campaigns, our packages are designed to drive growth and engagement across channels. The Golden package offers advanced analytics and customized strategies for maximum impact.',
      columns: ['Service', 'Basic', 'Silver', 'Golden'],
      rows: [
        {
          service: 'Audience Research & Segmentation',
          basic: 'Included',
          silver: 'Included',
          golden: 'Advanced',
        },
        {
          service: 'Single-Channel Campaigns',
          basic: 'Supported',
          silver: 'Supported',
          golden: 'Supported',
        },
        {
          service: 'Content Creation (Graphics/Posts)',
          basic: '5',
          silver: '15',
          golden: '30',
        },
        {
          service: 'Multi-Channel Execution',
          basic: '-',
          silver: 'Included',
          golden: 'Included',
        },
        {
          service: 'Analytics & Reporting',
          basic: '-',
          silver: 'Basic',
          golden: 'Advanced',
        },
        {
          service: 'Personalized Marketing Plan',
          basic: '-',
          silver: '-',
          golden: 'Included',
        },
        { service: 'Fees', basic: '$500+', silver: '$800+', golden: '$1200+' },
      ],
    },
    ads: {
      image: 'assets/img/advertising.png',
      description: 'Our Advertising Services',
      summary:
        'Boost your brand visibility with tailored advertising campaigns. From creative ad designs to advanced performance tracking, our packages are customized to meet your business needs. Upgrade to the Golden package for multi-platform campaigns and personalized strategies.',
      columns: ['Service', 'Basic', 'Silver', 'Golden'],
      rows: [
        {
          service: 'Targeted Ad Placement',
          basic: 'Included',
          silver: 'Included',
          golden: 'Advanced',
        },
        {
          service: 'Single-Platform Advertising',
          basic: 'Included',
          silver: 'Included',
          golden: 'Included',
        },
        {
          service: 'Ad Design & Visuals',
          basic: '3',
          silver: '10',
          golden: '20',
        },
        {
          service: 'Multi-Platform Campaigns',
          basic: '-',
          silver: 'Included',
          golden: 'Included',
        },
        {
          service: 'Performance Analytics',
          basic: '-',
          silver: 'Basic',
          golden: 'Advanced',
        },
        {
          service: 'Custom Advertising Strategy',
          basic: '-',
          silver: '-',
          golden: 'Included',
        },
        { service: 'Fees', basic: '$600+', silver: '$1000+', golden: '$1500+' },
      ],
    },
    printing: {
      image: 'assets/img/printing.png',
      description: 'Our Printing Services',
      summary:
        'Deliver professional and high-quality print materials with our printing services. From business cards and flyers to banners and branded merchandise, our packages ensure your brand stands out with exceptional designs and finishes.',
      columns: ['Service', 'Basic', 'Silver', 'Golden'],
      rows: [
        {
          service: 'Business Cards Printing',
          basic: '500',
          silver: '1000',
          golden: '2000',
        },
        {
          service: 'Flyers & Brochures',
          basic: '-',
          silver: '100',
          golden: '500',
        },
        { service: 'Roll-Up Banners', basic: '-', silver: '2', golden: '5' },
        {
          service: 'Branded Merchandise',
          basic: '-',
          silver: 'Included',
          golden: 'Included',
        },
        {
          service: 'Customized Designs',
          basic: '-',
          silver: 'Included',
          golden: 'Included',
        },
        {
          service: 'Delivery Service',
          basic: 'Local',
          silver: 'Local',
          golden: 'International',
        },
        { service: 'Fees', basic: '$200+', silver: '$500+', golden: '$1000+' },
      ],
    },
  };

  SERVICES_DATA_ARABIC = {
    'our-Branding-Services': {
      image: 'assets/img/design.jpg',
      description: 'خدمات العلامة التجارية الخاصة بنا',
      summary:
        'قم بإنشاء هوية قوية وفريدة من نوعها لعملك من خلال خدماتنا المتخصصة في العلامة التجارية. من تصميم الشعارات واختيار الألوان إلى مواد العلامة التجارية الكاملة، نقدم حزمًا مصممة لتلبية احتياجاتك الخاصة. اختر من الحزم الأساسية أو الفضية أو الذهبية لترتقي بعلامتك التجارية من خلال تصميمات متسقة وعالية الجودة تترك انطباعًا دائمًا.',
      columns: ['خدمة', 'أساسي', 'فضي', 'ذهبي'],
      rows: [
        {
          service: 'تصميم شعار + ألوان + خطوط',
          basic: '2',
          silver: '3',
          golden: '4',
        },
        {
          service: 'كتالوج الشركة',
          basic: '-',
          silver: 'مضمن',
          golden: 'مضمن',
        },
        {
          service: 'تصميم بطاقات العمل',
          basic: 'مضمن',
          silver: 'مضمن',
          golden: 'مضمن',
        },
        {
          service: 'تصميم رول أب + حقائب',
          basic: '-',
          silver: 'مضمن',
          golden: 'مضمن',
        },
        {
          service: 'قوالب وسائل التواصل الاجتماعي',
          basic: '2',
          silver: '5',
          golden: '10',
        },
        {
          service: 'تصميم بطاقات الموظفين',
          basic: 'مضمن',
          silver: 'مضمن',
          golden: 'مضمن',
        },
        {
          service: 'التكلفة',
          basic: '300$+',
          silver: '400$+',
          golden: '600$+',
        },
      ],
    },
    'social-media-design': {
      image: 'assets/img/socialmedia.jpg',
      description: 'خدمات إدارة وسائل التواصل الاجتماعي الخاصة بنا',
      summary:
        'عزز وجودك على الإنترنت من خلال خدماتنا المتخصصة في إدارة وسائل التواصل الاجتماعي. سواء كنت تبحث عن إنشاء محتوى أساسي أو إدارة شاملة متعددة المنصات، فإن حزمنا تضمن التفاعل والنمو ورضا العملاء. اختر الحزمة الذهبية للاستفادة من الميزات المتقدمة مثل تدريب مركز الاتصال وحملات الإعلانات المخصصة.',
      columns: ['خدمة', 'أساسي', 'فضي', 'ذهبي'],
      rows: [
        {
          service: 'إنشاء المحتوى + تصميم المنشورات',
          basic: '10 منشورات/شهر',
          silver: '15 منشورات/شهر',
          golden: '25 منشورات/شهر',
        },
        {
          service: 'إدارة المنصات',
          basic: 'منصة واحدة',
          silver: 'منصتان',
          golden: '3 منصات',
        },
        {
          service: 'إدارة التعليقات والرسائل',
          basic: 'مضمن',
          silver: 'مضمن',
          golden: 'مضمن',
        },
        {
          service: 'تحليلات الأداء',
          basic: 'أساسية',
          silver: 'تفصيلية',
          golden: 'متقدمة',
        },
        {
          service: 'إعداد حملات الإعلانات',
          basic: '-',
          silver: 'مضمن',
          golden: 'مضمن',
        },
        {
          service: 'تدريب مركز الاتصال',
          basic: '-',
          silver: '-',
          golden: 'مضمن',
        },
        {
          service: 'التكلفة',
          basic: '300$+',
          silver: '450$+',
          golden: '700$+',
        },
      ],
    },
    'web-dev': {
      image: 'assets/img/webDev.png',
      description: 'خدمات تطوير الويب الخاصة بنا',
      summary:
        'قم ببناء حضور احترافي عبر الإنترنت من خلال خدماتنا في تطوير الويب. سواء كنت بحاجة إلى حلول بسيطة باستخدام ووردبريس أو مواقع مخصصة بالكامل، فإننا نقدم حزمًا تلبي احتياجاتك. مع الحزمة الذهبية، ستحصل على ميزات متقدمة مثل دعم متعدد اللغات، برمجة مخصصة، ودعم تقني ممتد.',
      columns: ['خدمة', 'أساسي', 'فضي', 'ذهبي'],
      rows: [
        {
          service: 'نوع الموقع',
          basic: 'قالب ووردبريس',
          silver: 'قالب مخصص',
          golden: 'قالب متعدد اللغات',
        },
        {
          service: 'عدد الصفحات',
          basic: 'حتى 4 صفحات',
          silver: 'حتى 8 صفحات',
          golden: 'حتى 12 صفحة',
        },
        { service: 'اللغات المدعومة', basic: '2', silver: '3', golden: '4' },
        {
          service: 'النطاق والاستضافة',
          basic: 'عام واحد',
          silver: 'عام واحد',
          golden: 'عامان',
        },
        {
          service: 'تدريب على لوحة الموقع',
          basic: 'ساعة واحدة',
          silver: 'ساعة واحدة',
          golden: 'ساعتان',
        },
        {
          service: 'الدعم التقني',
          basic: 'شهر واحد',
          silver: '3 أشهر',
          golden: '6 أشهر',
        },
        { service: 'التكلفة', basic: '800$', silver: '1200$', golden: '1900$' },
      ],
    },
    marketing: {
      image: 'assets/img/marketing2.png',
      description: 'خدمات استراتيجيات التسويق الخاصة بنا',
      summary:
        'حقق أهداف عملك من خلال استراتيجيات التسويق المدفوعة بالنتائج. من البحث عن الجمهور إلى الحملات المخصصة، تم تصميم حزمنا لدفع النمو والتفاعل عبر القنوات. تقدم الحزمة الذهبية تحليلات متقدمة واستراتيجيات مخصصة لتحقيق أقصى تأثير.',
      columns: ['خدمة', 'أساسي', 'فضي', 'ذهبي'],
      rows: [
        {
          service: 'بحث وتقسيم الجمهور',
          basic: 'مضمن',
          silver: 'مضمن',
          golden: 'متقدم',
        },
        {
          service: 'حملات قناة واحدة',
          basic: 'مدعومة',
          silver: 'مدعومة',
          golden: 'مدعومة',
        },
        {
          service: 'إنشاء المحتوى (رسوم/منشورات)',
          basic: '5',
          silver: '15',
          golden: '30',
        },
        {
          service: 'تنفيذ متعدد القنوات',
          basic: '-',
          silver: 'مضمن',
          golden: 'مضمن',
        },
        {
          service: 'تحليلات وتقارير',
          basic: '-',
          silver: 'أساسية',
          golden: 'متقدمة',
        },
        {
          service: 'خطة تسويقية مخصصة',
          basic: '-',
          silver: '-',
          golden: 'مضمن',
        },
        {
          service: 'التكلفة',
          basic: '500$+',
          silver: '800$+',
          golden: '1200$+',
        },
      ],
    },
    ads: {
      image: 'assets/img/advertising.png',
      description: 'خدماتنا في الإعلانات',
      summary:
        'عزز وضوح علامتك التجارية من خلال حملات إعلانية مخصصة. من تصميم الإعلانات الإبداعية إلى تتبع الأداء المتقدم، تم تخصيص حزمنا لتلبية احتياجات عملك. قم بالترقية إلى الحزمة الذهبية للحصول على حملات متعددة المنصات واستراتيجيات مخصصة.',
      columns: ['خدمة', 'أساسي', 'فضي', 'ذهبي'],
      rows: [
        {
          service: 'وضع الإعلانات المستهدفة',
          basic: 'مضمن',
          silver: 'مضمن',
          golden: 'متقدم',
        },
        {
          service: 'الإعلانات على منصة واحدة',
          basic: 'مضمن',
          silver: 'مضمن',
          golden: 'مضمن',
        },
        {
          service: 'تصميم الإعلانات والمرئيات',
          basic: '3',
          silver: '10',
          golden: '20',
        },
        {
          service: 'حملات متعددة المنصات',
          basic: '-',
          silver: 'مضمن',
          golden: 'مضمن',
        },
        {
          service: 'تحليلات الأداء',
          basic: '-',
          silver: 'أساسية',
          golden: 'متقدمة',
        },
        {
          service: 'استراتيجية إعلان مخصصة',
          basic: '-',
          silver: '-',
          golden: 'مضمن',
        },
        {
          service: 'التكلفة',
          basic: '600$+',
          silver: '1000$+',
          golden: '1500$+',
        },
      ],
    },
    printing: {
      image: 'assets/img/printing.png',
      description: 'خدمات الطباعة الخاصة بنا',
      summary:
        'قدم مواد طباعة احترافية وعالية الجودة مع خدمات الطباعة الخاصة بنا. من بطاقات العمل والنشرات إلى اللافتات والبضائع ذات العلامة التجارية، تضمن حزمنا أن تبرز علامتك التجارية بتصميمات وتشطيبات استثنائية.',
      columns: ['خدمة', 'أساسي', 'فضي', 'ذهبي'],
      rows: [
        {
          service: 'طباعة بطاقات العمل',
          basic: '500',
          silver: '1000',
          golden: '2000',
        },
        {
          service: 'النشرات والكتيبات',
          basic: '-',
          silver: '100',
          golden: '500',
        },
        { service: 'رول أب', basic: '-', silver: '2', golden: '5' },
        {
          service: 'بضائع ذات علامة تجارية',
          basic: '-',
          silver: 'مضمن',
          golden: 'مضمن',
        },
        {
          service: 'تصميمات مخصصة',
          basic: '-',
          silver: 'مضمن',
          golden: 'مضمن',
        },
        {
          service: 'خدمة التوصيل',
          basic: 'محلية',
          silver: 'محلية',
          golden: 'دولية',
        },
        {
          service: 'التكلفة',
          basic: '200$+',
          silver: '500$+',
          golden: '1000$+',
        },
      ],
    },
  };

  isTranslationsLoaded = false;
  isArabic = false;
  hoveredColumn: number | null = null;

  private langChangeSubscription: Subscription | null = null;

  onMouseEnter(colIndex: number) {
    this.hoveredColumn = colIndex;
  }

  onMouseLeave() {
    this.hoveredColumn = null;
  }

  ngOnInit(): void {
    ('');
    this.route.params.subscribe((params) => {
      this.serviceId = params['id'];
      console.log(this.serviceId);
      // Fetch table data based on serviceId
    });
    // Set initial value based on current language
    this.isArabic = this.translate.currentLang === 'ar';
    this.SERVICES_DATA = this.isArabic
      ? this.SERVICES_DATA_ARABIC
      : this.SERVICES_DATA_ENGLISH;
    this.tableData = this.SERVICES_DATA[this.serviceId];
    if (this.tableData == undefined) {
      this.router.navigate(['/404NotFound']);
    }
    // Subscribe to language change events
    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event) => {
        this.isArabic = event.lang === 'ar';

        this.SERVICES_DATA = this.isArabic
          ? this.SERVICES_DATA_ARABIC
          : this.SERVICES_DATA_ENGLISH;

        this.tableData = this.SERVICES_DATA[this.serviceId];
      }
    );

    // Scroll to top on navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
