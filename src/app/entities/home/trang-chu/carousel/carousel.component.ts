import { Component, OnInit, Input } from '@angular/core';
import { Phim } from 'src/app/commom/models/Phim';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CarouselComponent implements OnInit {
  antMan: any;
  madMax: any;
  infinity: any;
  ted2: any;
  constructor(config: NgbModalConfig, private modalService: NgbModal, private sanitizer: DomSanitizer) {

  }
@Input() phim: Phim[];

  ngOnInit() {
    this.ted2 = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/S3AVcCggRnU');
    this.antMan = this.sanitizer.bypassSecurityTrustResourceUrl( 'https://www.youtube.com/embed/1HpZevFifuo');
    this.madMax = this.sanitizer.bypassSecurityTrustResourceUrl( 'https://www.youtube.com/embed/hEJnMQG9ev8');
    this.infinity = this.sanitizer.bypassSecurityTrustResourceUrl( 'https://www.youtube.com/embed/DKqu9qc-5f4');
  }
  open(content) {
    this.modalService.open(content);
  }
  openAnt(content) {
    this.modalService.open(content);
  }
  openMadMax(contentMadMax) {
    this.modalService.open(contentMadMax);
  }
  openInfinity(contentInfinity) {
    this.modalService.open(contentInfinity);
  }

}
