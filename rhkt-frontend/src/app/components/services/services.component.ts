import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  services = [
    {
      title: 'Pentesting',
      description:
        'Unser Pentesting-Service für kleine Unternehmen bietet eine umfassende Überprüfung von IT-Systemen und Anwendungen auf Schwachstellen und Sicherheitslücken. Wir verwenden manuelle und automatisierte Tests, um potenzielle Angriffsvektoren zu identifizieren und bewerten Schweregrad und Priorität jeder Schwachstelle. Wir liefern detaillierte Berichte und Empfehlungen zur Behebung von Schwachstellen.',
      image: '../../assets/fly-d-zAhAUSdRLJ8-unsplash.jpg',
    },
    {
      title: 'Sichere Architektur',
      description:
        'Unser Service für sichere Architektur hilft Ihnen, die Sicherheit Ihrer IT-Systeme und Anwendungen zu verbessern. Wir bieten Beratung und Unterstützung bei der Auswahl und Implementierung von Sicherheitslösungen, die zu Ihren Anforderungen passen. Wir helfen Ihnen, die Sicherheit Ihrer IT-Systeme und Anwendungen zu verbessern. Wir bieten Beratung und Unterstützung bei der Auswahl und Implementierung von Sicherheitslösungen, die zu Ihren Anforderungen passen.',
      image: '../../assets/anders-jilden-Sc5RKXLBjGg-unsplash.jpg',
    },
    {
      title: 'Sichere Softwareentwicklung',
      description:
        'Unsere Dienstleistung unterstützt Unternehmen bei der Entwicklung sicherer Software, indem wir umfassende Tools und Ressourcen bereitstellen. Wir bieten Code-Reviews, Identifizierung von Schwachstellen, Empfehlungen zur Behebung von Sicherheitslücken, Schulungen zur sicheren Programmierung und automatisierte Sicherheitstests an. Mit unserem Service können Unternehmen sicherstellen, dass ihre Anwendungen den höchsten Sicherheitsstandards entsprechen und gegen mögliche Angriffe und Datenschutzverletzungen geschützt sind.',
      image: '../../assets/florian-olivo-4hbJ-eymZ1o-unsplash.jpg',
    },
  ];
}
