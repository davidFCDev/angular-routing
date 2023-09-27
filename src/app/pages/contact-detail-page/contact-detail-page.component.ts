import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRandomContact } from 'src/app/models/randomuser';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss'],
})
export class ContactDetailPageComponent implements OnInit {
  id: any | undefined;
  contact: IRandomContact | undefined;
  prevFilter: string = 'all';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
      }
    });

    // Vamos a leer el state del contacto
    if (history.state.data) {
      this.contact = history.state.data;
    }

    if (history.state.filter) {
      this.prevFilter = history.state.filter;
    }
  }
}
