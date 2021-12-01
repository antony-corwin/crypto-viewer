import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestCoinapiService {

  private readonly _api_key: string;
  private readonly _headers = {}
  private readonly _rest_url: string;

  constructor(private http: HttpClient) {
    this._api_key = "A2DAB6A6-C2D9-44D7-AEDA-5B18BEDA597B"
    this._headers = {
      "X-CoinAPI-Key": this._api_key
    }
    this._rest_url = "https://rest.coinapi.io/";
  }

  // public get exchanges(): any {
  // if (this._exchanges$.getValue().length !== 0) {
  //   return this._exchanges$;
  // }
  // this._metadata_list_exchanges().subscribe((resp: any) => {
  //   this._exchanges$.next(resp);
  //   return this._exchanges$.getValue();
  // })
  // }

  public get symbols() {
    if (localStorage.getItem('symbols')) {
      return JSON.parse(<string>localStorage.getItem('symbols')).items;
    } else {
      return this._metadata_list_symbols()

      //   .subscribe((resp: any) => {
      //   // localStorage.setItem('symbols', JSON.stringify({items: resp}));
      //   console.log(resp)
      //   // let symbolType: any[];
      //   // symbolType = [];
      //   // let indexes: any[];
      //   // indexes = [];
      //   //
      //   //
      //   // let tradeTypeSymbols = resp.map((el: any) => {
      //   //   if (!symbolType.includes(el.symbol_type)) {
      //   //     symbolType.push(el.symbol_type);
      //   //   }
      //   //   if(el.symbol_type === "OPTION") {
      //   //     indexes.push(el)
      //   //   }
      //   // })
      //   // console.log('tradeTypeSymbols', tradeTypeSymbols)
      //   // console.log('symbolType', symbolType)
      //   // console.log('indexes', indexes)
      //   return resp.asObservable();
      // })
    }
  }

  _metadata_list_symbols() {
    const path = this._rest_url + 'v1/symbols?filter_exchange_id=COINBASE';
    const options = {headers: this._headers};

    return this.http.get(path, options);
  }

  trades_historical_data(symbol_id?: string, time_start?: Date, time_end?: Date | null, limit?: number | null) {
    // let path = this._rest_url + `v1/trades/${symbol_id}/history?time_start=${time_start.toISOString()}`;
    let path = this._rest_url + `v1/trades/${symbol_id || 'BITSTAMP_SPOT_BTC_USD'}/history?time_start=${time_start!.toISOString() || '2021-01-01T00:00:00'}&time_end=${time_end!.toISOString() || '2021-10-25T00:00:00'}&limit=${limit || 1}`;
    let params: any = {};
    if (time_end) {
      params.time = time_end.toISOString()
    }
    if (limit) {
      params.limit = limit
    }
    const options = {headers: this._headers, params: params};

    return this.http.get(path, options);
  }
}
