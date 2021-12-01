export interface Exchange {
  exchange_id: string
  website: string
  name: string
}

export interface Asset {
  asset_id: string
  name: string
  type_is_crypto: boolean
}

export interface SymbolBase {
  symbol_type: string
}

export interface Symbol extends SymbolBase {
  symbol_id: string
  exchange_id: string
  asset_id_base: string
  asset_id_quote: string
}

export interface Spot extends Symbol {

}

export interface Future {
  future_delivery_time: Date
}

export interface Option {
  option_type_is_call: boolean
  option_strike_price: number
  option_contract_unit: number
  option_exercise_style: string
  option_expiration_time: Date
}

export interface Exchange_rate {
  time: Date
  asset_id_base: string
  asset_id_quote: string
  rate: number
}

export interface Ohlcv_period {
  period_id: string
  length_seconds: number
  length_months: number
  unit_count: number
  unit_name: string
  display_name: string
}

export interface Ohlcv_data {
  time_period_start: Date
  time_period_end: Date
  time_open: Date
  time_close: Date
  price_open: number
  price_high: number
  price_low: number
  price_close: number
  volume_traded: number
  trades_count: number
}

export interface Trade {
  symbol_id: string
  time_exchange: Date
  time_coinapi: Date
  uuid: string
  price: number
  size: number
  taker_side: string
}

export interface Quote {
  symbol_id: string
  time_exchange: Date
  time_coinapi: Date
  ask_price: number
  ask_size: number
  bid_price: number
  bid_size: number
  last_trade: Trade
}

export interface Bid {
  price: number
  size: number
}

export interface Orderbook {
  symbol_id: string
  time_exchange: Date
  time_coinapi: Date
  asks: Bid[]
  bids: Bid[]
}
