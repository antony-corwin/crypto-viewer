import { Injectable } from '@angular/core';
import {WebSocketSubject} from "rxjs/internal-compatibility";
import {webSocket} from "rxjs/webSocket";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WsCoinapiService {

  private readonly _ws_url: string = 'wss://ws.coinapi.io/v1/';
  private readonly _api_key: string;

  private myWebSocket: WebSocketSubject<any> = webSocket(this._ws_url);

  public response: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() {
    this._api_key = "A2DAB6A6-C2D9-44D7-AEDA-5B18BEDA597B"
  }

  test() {
    this.myWebSocket.next({
      "type": "hello",
        "apikey": this._api_key,
        "heartbeat": false,
        "subscribe_data_type": ["trade"],
        "subscribe_filter_symbol_id": ["BITSTAMP_SPOT_BTC_USD$"]
    });

    this.myWebSocket.subscribe(
      msg => {
        console.log('message received: ', msg)
        if (msg.type !== 'error') {
          this.response.next(msg);
        }
      },
      // Called whenever there is a message from the server
      err => console.log(err),
      // Called if WebSocket API signals some kind of error
      () => console.log('complete')
      // Called when connection is closed (for whatever reason)
    );
  }
}

