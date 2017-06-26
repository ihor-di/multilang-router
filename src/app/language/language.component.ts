import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor(private translate: TranslateService, private activatedRoute : ActivatedRoute) {
  }

  ngOnInit() {
    this.translate.addLangs(["en", "fr"]);

    this.activatedRoute.params.subscribe( (params : Params) => {

      if( params['lang'] ) {
        this.translate.use( params['lang'] );
      }

    });
  }

}
