import {Component, OnInit} from '@angular/core';
import {WsCoinapiService} from "./services/ws-coinapi.service";
import {BehaviorSubject} from "rxjs";
import {RestCoinapiService} from "./services/rest-coinapi.service";
import {min} from "rxjs/operators";

export interface response {
  price: number;
  sequence: number;
  size: number;
  symbol_id: string;
  taker_side: string;
  time_coinapi: string;
  time_exchange: string;
  type: string;
  uuid: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  selectedCountryAdvanced: any;
  filteredSymbols: any[];

  marketData: BehaviorSubject<response> = new BehaviorSubject<response>({
    price: 0,
    sequence: 0,
    size: 0,
    symbol_id: '',
    taker_side: '',
    time_coinapi: '',
    time_exchange: '',
    type: '',
    uuid: ''
  });

  public marketData$ = this.marketData.asObservable();

  symbol$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  symbols: any[];

  // symbol: string= ''

  // get symbol() {
  //   return this.marketData.getValue().symbol_id;
  // }
  selectedSymbol: any;

  get price() {
    return this.marketData.getValue().price;
  }

  get time() {
    return this.marketData.getValue().time_coinapi;
  }

  constructor(private wsCoinApi: WsCoinapiService, private restCoinApi: RestCoinapiService) {
    this.selectedSymbol = '';
    this.symbols = []
    this.filteredSymbols = []
  }

  ngOnInit(): void {
    this.wsCoinApi.test();
    this.restCoinApi._metadata_list_symbols().subscribe((data: any) => {
        this.symbols = data;
      this.filteredSymbols = data
        console.log(data)
      }
    );
    this.marketData = this.wsCoinApi.response;
    const now = new Date();
    const secondNow = now.getSeconds();
    const minuteNow = now.getMinutes();
    const hourNow = now.getHours();
    const dayNow = now.getDate();
    const monthNow = now.getMonth();
    const yearNow = now.getFullYear();

    const dateUTC = new Date(yearNow, monthNow, dayNow, hourNow, minuteNow, secondNow).toUTCString();
    console.log('dateUTC', dateUTC)

    if (localStorage.getItem('historical-data') === null) {
      this.restCoinApi.trades_historical_data('BITSTAMP_SPOT_BTC_USD', new Date(yearNow, monthNow -6 , dayNow, hourNow, minuteNow, secondNow)).subscribe(resp => {
        console.log(resp)
        localStorage.setItem('historical-data', JSON.stringify({data: resp}));
      })
    }

  }

  filterSymbols(event: any) {
  debugger
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side

    if (this.symbols.length) {
      this.symbols.forEach(symbol => {
        if (symbol.symbol_id_exchange.includes(event.query)) {
          this.filteredSymbols.push(symbol);
        }
      })
    }
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    // let filtered : any[] = [];
    // let query = event.query;
    //
    // for(let i = 0; i < this.countries.length; i++) {
    //   let country = this.countries[i];
    //   if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
    //     filtered.push(country);
    //   }
    // }
    //
    // this.filteredCountries = filtered;
  }

}
