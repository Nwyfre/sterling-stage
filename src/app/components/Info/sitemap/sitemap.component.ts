import { Component } from '@angular/core';
import { PdfJsViewerModule } from "ng2-pdfjs-viewer"

@Component({
  selector: 'app-sitemap',
  imports: [PdfJsViewerModule],
  templateUrl: './sitemap.component.html',
  styleUrl: './sitemap.component.scss'
})
export class SitemapComponent {

}
