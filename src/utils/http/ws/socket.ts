// import pako from 'pako';
import { EventEmitter } from 'events'
interface UtilsMap<T> {
  [key: string]: T
}
class TvWebSocket {
  private url = process.env.VUE_APP_WEBSOCKET_URL as string
  private ws: WebSocket | null = null
  private success: UtilsMap<string> = {}
  private failure: UtilsMap<string> = {}
  private timer: NodeJS.Timeout | null = null
  private evt = new EventEmitter()

  public initWebSocket() {
    this.ws = new WebSocket(this.url)
    // @note arraybuffer
    // this.ws.binaryType = 'arraybuffer';
    this.ws.onopen = this.onopen.bind(this)
    this.ws.onclose = this.onclose.bind(this)
    this.ws.onerror = this.onerror.bind(this)
    this.ws.onmessage = this.onmessage.bind(this)
    console.log(' >> WebSocket init :', this.url)
  }

  private onopen() {
    if (!this.ws) {
      return
    }
    console.log(' >> WebSocket open...')
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
      // 断线重新订阅
      for (const key in this.success) {
        this.ws.send(this.success[key])
        console.log(` >> WebSocket send: ${this.success[key]}`)
      }
    }
    // 失败重新订阅
    for (const key in this.failure) {
      if (this.success[key]) {
        continue
      }
      this.ws.send(this.failure[key])
      this.success[key] = this.failure[key]
      console.log(` >> WebSocket send: ${this.failure[key]}`)
    }
    this.failure = {}
  }

  private onclose() {
    this.ws = null
    console.log(' >> Websocket Close...')
    if (!this.timer) {
      this.onReconnection()
    }
  }

  private onerror(event: Event) {
    console.log(' >> Websocket Error...', event)
  }

  // event: { data: pako.Data }
  private onmessage(event: { data: any }) {
    // if (!event.data) {
    //   return;
    // }
    // 解压数据
    // const text = pako.inflate(event.data, {
    //   to: 'string',
    // });
    const text = event.data
    const data = JSON.parse(text)
    // if (data && data.ping) {
    //   this.ws?.send(
    //     JSON.stringify({
    //       pong: Date.now(),
    //     })
    //   );
    //   return;
    // }

    this.onBroadcast(data)
  }

  /**
   * 广播通知
   */
  private onBroadcast(msg: any) {
    const { cmd, data, id } = msg

    // @todo 需要统一协议，站内信模块数据处理
    if (id) {
      // 组装id 广播通知 `${coin}${cmd}${market}`
      this.evt.emit(id, data)
      return
    }

    let subscribeId = ''
    // @note 正式数据介入放开限制，合约交易模块数据处理
    if (data) {
      // console.log('bbbb');
    } else {
      // console.log('ssss')
      return
    }
    const { i, l, t } = data
    if (!i) return
    const { coin, market } = i

    if (!coin || !market || !cmd) return
    if (t) {
      subscribeId = `${coin.toLowerCase()}${cmd}${market.toLowerCase()}${t}`
    } else {
      subscribeId = `${coin.toLowerCase()}${cmd}${market.toLowerCase()}`
    }
    // 组装id 广播通知 `${coin}${cmd}${market}`
    this.evt.emit(subscribeId, l || [])
  }

  public subscribe(name: string, params: any, callback: (...args: any[]) => void) {
    let ee: EventEmitter
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      ee = this.failurePush(name, params, callback)
    } else {
      ee = this.successPush(name, params, callback)
    }
    return {
      remove: () => {
        this.unsubscribe(name)
        ee.removeAllListeners(name)
      }
    }
  }

  public unsubscribe(name: string) {
    if (this.failure[name]) {
      delete this.failure[name]
    }
    if (!this.success[name]) {
      return
    }
    if (!this.ws) {
      delete this.success[name]
      return
    }
    const unsub = JSON.parse(this.success[name])
    // @note 协议调整
    // unsub.cmd = 'unsub';
    this.ws.send(JSON.stringify(unsub))
    this.evt.removeAllListeners(name)
    console.log(` >> WebSocket send: ${JSON.stringify(unsub)}`)
    delete this.success[name]
  }

  private successPush(name: string, params: any, callback: (...args: any[]) => void) {
    this.success[name] = JSON.stringify(params)
    this.ws?.send(this.success[name])
    console.log(` >> WebSocket send: ${this.success[name]}`)
    return this.evt.on(name, callback)
  }

  private failurePush(name: string, params: any, callback: (...args: any[]) => void) {
    this.failure[name] = JSON.stringify(params)
    console.log(` >> WebSocket 准备订阅: ${this.failure[name]}`)
    return this.evt.on(name, callback)
  }

  /**
   * 断线重连
   */
  private onReconnection() {
    if (!this.url) {
      return
    }
    this.initWebSocket()
    this.timer = setInterval(() => {
      this.initWebSocket()
      const now = new Date()
      console.log(` >> [${now}] WebSocket Reconnect....`)
    }, 6000)
  }
}

export const ws = new TvWebSocket()
