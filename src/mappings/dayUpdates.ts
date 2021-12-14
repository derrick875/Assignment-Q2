/* eslint-disable prefer-const */
import { BigInt, BigDecimal, ethereum } from '@graphprotocol/graph-ts'
import { Pair, Bundle, Token, ExchangeFactory, ExchangeDayData } from '../types/schema'
import { ONE_BI, ZERO_BD, ZERO_BI, FACTORY_ADDRESS } from './helpers'

export function updateExchangeDayData(uniswap: ExchangeFactory, event: ethereum.Event): ExchangeDayData {
  // let uniswap = ExchangeFactory.load(FACTORY_ADDRESS)
  let timestamp = event.block.timestamp.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400
  let exchangeDayData = ExchangeDayData.load(dayID.toString())
  if (exchangeDayData === null) {
    exchangeDayData = new ExchangeDayData(dayID.toString())
    exchangeDayData.date = dayStartTimestamp
    exchangeDayData.dailyVolumeUSD = ZERO_BD
    exchangeDayData.dailyVolumeETH = ZERO_BD
    exchangeDayData.totalVolumeUSD = ZERO_BD
    exchangeDayData.totalVolumeETH = ZERO_BD
    exchangeDayData.dailyVolumeUntracked = ZERO_BD
  }

  exchangeDayData.totalLiquidityUSD = uniswap.totalLiquidityUSD
  exchangeDayData.totalLiquidityETH = uniswap.totalLiquidityETH
  exchangeDayData.txCount = uniswap.txCount
  //exchangeDayData.save()

  return exchangeDayData as ExchangeDayData
}
