// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExchangeFactory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExchangeFactory entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExchangeFactory entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExchangeFactory", id.toString(), this);
  }

  static load(id: string): ExchangeFactory | null {
    return store.get("ExchangeFactory", id) as ExchangeFactory | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pairCount(): i32 {
    let value = this.get("pairCount");
    return value.toI32();
  }

  set pairCount(value: i32) {
    this.set("pairCount", Value.fromI32(value));
  }

  get totalVolumeUSD(): BigDecimal {
    let value = this.get("totalVolumeUSD");
    return value.toBigDecimal();
  }

  set totalVolumeUSD(value: BigDecimal) {
    this.set("totalVolumeUSD", Value.fromBigDecimal(value));
  }

  get totalVolumeETH(): BigDecimal {
    let value = this.get("totalVolumeETH");
    return value.toBigDecimal();
  }

  set totalVolumeETH(value: BigDecimal) {
    this.set("totalVolumeETH", Value.fromBigDecimal(value));
  }

  get totalLiquidityUSD(): BigDecimal {
    let value = this.get("totalLiquidityUSD");
    return value.toBigDecimal();
  }

  set totalLiquidityUSD(value: BigDecimal) {
    this.set("totalLiquidityUSD", Value.fromBigDecimal(value));
  }

  get totalLiquidityETH(): BigDecimal {
    let value = this.get("totalLiquidityETH");
    return value.toBigDecimal();
  }

  set totalLiquidityETH(value: BigDecimal) {
    this.set("totalLiquidityETH", Value.fromBigDecimal(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    return value.toBigInt();
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get tradeVolume(): BigDecimal {
    let value = this.get("tradeVolume");
    return value.toBigDecimal();
  }

  set tradeVolume(value: BigDecimal) {
    this.set("tradeVolume", Value.fromBigDecimal(value));
  }

  get tradeVolumeUSD(): BigDecimal {
    let value = this.get("tradeVolumeUSD");
    return value.toBigDecimal();
  }

  set tradeVolumeUSD(value: BigDecimal) {
    this.set("tradeVolumeUSD", Value.fromBigDecimal(value));
  }

  get whitelist(): Array<string | null> {
    let value = this.get("whitelist");
    return value.toStringArray();
  }

  set whitelist(value: Array<string | null>) {
    this.set("whitelist", Value.fromStringArray(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }

  get totalLiquidity(): BigDecimal {
    let value = this.get("totalLiquidity");
    return value.toBigDecimal();
  }

  set totalLiquidity(value: BigDecimal) {
    this.set("totalLiquidity", Value.fromBigDecimal(value));
  }

  get derivedETH(): BigDecimal | null {
    let value = this.get("derivedETH");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set derivedETH(value: BigDecimal | null) {
    if (value === null) {
      this.unset("derivedETH");
    } else {
      this.set("derivedETH", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get pairBase(): Array<string> {
    let value = this.get("pairBase");
    return value.toStringArray();
  }

  set pairBase(value: Array<string>) {
    this.set("pairBase", Value.fromStringArray(value));
  }

  get pairQuote(): Array<string> {
    let value = this.get("pairQuote");
    return value.toStringArray();
  }

  set pairQuote(value: Array<string>) {
    this.set("pairQuote", Value.fromStringArray(value));
  }
}

export class Pair extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Pair entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Pair entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Pair", id.toString(), this);
  }

  static load(id: string): Pair | null {
    return store.get("Pair", id) as Pair | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token0(): string {
    let value = this.get("token0");
    return value.toString();
  }

  set token0(value: string) {
    this.set("token0", Value.fromString(value));
  }

  get token1(): string {
    let value = this.get("token1");
    return value.toString();
  }

  set token1(value: string) {
    this.set("token1", Value.fromString(value));
  }

  get reserve0(): BigDecimal {
    let value = this.get("reserve0");
    return value.toBigDecimal();
  }

  set reserve0(value: BigDecimal) {
    this.set("reserve0", Value.fromBigDecimal(value));
  }

  get reserve1(): BigDecimal {
    let value = this.get("reserve1");
    return value.toBigDecimal();
  }

  set reserve1(value: BigDecimal) {
    this.set("reserve1", Value.fromBigDecimal(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get reserveETH(): BigDecimal {
    let value = this.get("reserveETH");
    return value.toBigDecimal();
  }

  set reserveETH(value: BigDecimal) {
    this.set("reserveETH", Value.fromBigDecimal(value));
  }

  get reserveUSD(): BigDecimal {
    let value = this.get("reserveUSD");
    return value.toBigDecimal();
  }

  set reserveUSD(value: BigDecimal) {
    this.set("reserveUSD", Value.fromBigDecimal(value));
  }

  get trackedReserveETH(): BigDecimal {
    let value = this.get("trackedReserveETH");
    return value.toBigDecimal();
  }

  set trackedReserveETH(value: BigDecimal) {
    this.set("trackedReserveETH", Value.fromBigDecimal(value));
  }

  get token0Price(): BigDecimal {
    let value = this.get("token0Price");
    return value.toBigDecimal();
  }

  set token0Price(value: BigDecimal) {
    this.set("token0Price", Value.fromBigDecimal(value));
  }

  get token1Price(): BigDecimal {
    let value = this.get("token1Price");
    return value.toBigDecimal();
  }

  set token1Price(value: BigDecimal) {
    this.set("token1Price", Value.fromBigDecimal(value));
  }

  get volumeToken0(): BigDecimal {
    let value = this.get("volumeToken0");
    return value.toBigDecimal();
  }

  set volumeToken0(value: BigDecimal) {
    this.set("volumeToken0", Value.fromBigDecimal(value));
  }

  get volumeToken1(): BigDecimal {
    let value = this.get("volumeToken1");
    return value.toBigDecimal();
  }

  set volumeToken1(value: BigDecimal) {
    this.set("volumeToken1", Value.fromBigDecimal(value));
  }

  get volumeUSD(): BigDecimal {
    let value = this.get("volumeUSD");
    return value.toBigDecimal();
  }

  set volumeUSD(value: BigDecimal) {
    this.set("volumeUSD", Value.fromBigDecimal(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get createdAtBlockNumber(): BigInt {
    let value = this.get("createdAtBlockNumber");
    return value.toBigInt();
  }

  set createdAtBlockNumber(value: BigInt) {
    this.set("createdAtBlockNumber", Value.fromBigInt(value));
  }

  get liquidityProviderCount(): BigInt {
    let value = this.get("liquidityProviderCount");
    return value.toBigInt();
  }

  set liquidityProviderCount(value: BigInt) {
    this.set("liquidityProviderCount", Value.fromBigInt(value));
  }

  get swaps(): Array<string> {
    let value = this.get("swaps");
    return value.toStringArray();
  }

  set swaps(value: Array<string>) {
    this.set("swaps", Value.fromStringArray(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get usdSwapped(): BigDecimal {
    let value = this.get("usdSwapped");
    return value.toBigDecimal();
  }

  set usdSwapped(value: BigDecimal) {
    this.set("usdSwapped", Value.fromBigDecimal(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get swaps(): Array<string | null> {
    let value = this.get("swaps");
    return value.toStringArray();
  }

  set swaps(value: Array<string | null>) {
    this.set("swaps", Value.fromStringArray(value));
  }
}

export class Swap extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Swap entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Swap entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Swap", id.toString(), this);
  }

  static load(id: string): Swap | null {
    return store.get("Swap", id) as Swap | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get pair(): string {
    let value = this.get("pair");
    return value.toString();
  }

  set pair(value: string) {
    this.set("pair", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get amount0In(): BigDecimal {
    let value = this.get("amount0In");
    return value.toBigDecimal();
  }

  set amount0In(value: BigDecimal) {
    this.set("amount0In", Value.fromBigDecimal(value));
  }

  get amount1In(): BigDecimal {
    let value = this.get("amount1In");
    return value.toBigDecimal();
  }

  set amount1In(value: BigDecimal) {
    this.set("amount1In", Value.fromBigDecimal(value));
  }

  get amount0Out(): BigDecimal {
    let value = this.get("amount0Out");
    return value.toBigDecimal();
  }

  set amount0Out(value: BigDecimal) {
    this.set("amount0Out", Value.fromBigDecimal(value));
  }

  get amount1Out(): BigDecimal {
    let value = this.get("amount1Out");
    return value.toBigDecimal();
  }

  set amount1Out(value: BigDecimal) {
    this.set("amount1Out", Value.fromBigDecimal(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get logIndex(): BigInt | null {
    let value = this.get("logIndex");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set logIndex(value: BigInt | null) {
    if (value === null) {
      this.unset("logIndex");
    } else {
      this.set("logIndex", Value.fromBigInt(value as BigInt));
    }
  }

  get amountUSD(): BigDecimal {
    let value = this.get("amountUSD");
    return value.toBigDecimal();
  }

  set amountUSD(value: BigDecimal) {
    this.set("amountUSD", Value.fromBigDecimal(value));
  }
}

export class Bundle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Bundle entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Bundle entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Bundle", id.toString(), this);
  }

  static load(id: string): Bundle | null {
    return store.get("Bundle", id) as Bundle | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ethPrice(): BigDecimal {
    let value = this.get("ethPrice");
    return value.toBigDecimal();
  }

  set ethPrice(value: BigDecimal) {
    this.set("ethPrice", Value.fromBigDecimal(value));
  }
}

export class ExchangeDayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExchangeDayData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExchangeDayData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExchangeDayData", id.toString(), this);
  }

  static load(id: string): ExchangeDayData | null {
    return store.get("ExchangeDayData", id) as ExchangeDayData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get dailyVolumeETH(): BigDecimal {
    let value = this.get("dailyVolumeETH");
    return value.toBigDecimal();
  }

  set dailyVolumeETH(value: BigDecimal) {
    this.set("dailyVolumeETH", Value.fromBigDecimal(value));
  }

  get dailyVolumeUSD(): BigDecimal {
    let value = this.get("dailyVolumeUSD");
    return value.toBigDecimal();
  }

  set dailyVolumeUSD(value: BigDecimal) {
    this.set("dailyVolumeUSD", Value.fromBigDecimal(value));
  }

  get dailyVolumeUntracked(): BigDecimal {
    let value = this.get("dailyVolumeUntracked");
    return value.toBigDecimal();
  }

  set dailyVolumeUntracked(value: BigDecimal) {
    this.set("dailyVolumeUntracked", Value.fromBigDecimal(value));
  }

  get totalVolumeETH(): BigDecimal {
    let value = this.get("totalVolumeETH");
    return value.toBigDecimal();
  }

  set totalVolumeETH(value: BigDecimal) {
    this.set("totalVolumeETH", Value.fromBigDecimal(value));
  }

  get totalLiquidityETH(): BigDecimal {
    let value = this.get("totalLiquidityETH");
    return value.toBigDecimal();
  }

  set totalLiquidityETH(value: BigDecimal) {
    this.set("totalLiquidityETH", Value.fromBigDecimal(value));
  }

  get totalVolumeUSD(): BigDecimal {
    let value = this.get("totalVolumeUSD");
    return value.toBigDecimal();
  }

  set totalVolumeUSD(value: BigDecimal) {
    this.set("totalVolumeUSD", Value.fromBigDecimal(value));
  }

  get totalLiquidityUSD(): BigDecimal {
    let value = this.get("totalLiquidityUSD");
    return value.toBigDecimal();
  }

  set totalLiquidityUSD(value: BigDecimal) {
    this.set("totalLiquidityUSD", Value.fromBigDecimal(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }
}
