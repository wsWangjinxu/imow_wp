import base from './base'
import Page from '../utils/Page'

export default class postRequire extends base {
  static async postData(requireData = {}) {
    const url = `${this.baseUrl}/Demand/Add`
    const result = await this.post(url, requireData)
    return result
  }

  static page() {
    const url = `${this.baseUrl}/Demand/getList`
    return new Page(url, (data) => {})
  }

  static publicListPage() {
    const url = `${this.baseUrl}/Demand/GetPublicList`
    return new Page(url, (data) => {})
  }

  static followListPage() {
    const url = `${this.baseUrl}/Demand/GetFollowList`
    return new Page(url, (data) => {})
  }

  static Detail() {
    const url = `${this.baseUrl}/Demand/Detail`
    return new Page(url, (data) => {})
  }

  static async AuctionDetail(params) {
    const url = `${this.baseUrl}/Demand/Detail`
    const result = await this.post(url, params)
    return result
  }

  static async GetBid(params) {
    const url = `${this.baseUrl}/Demand/GetBid`
    const result = await this.post(url, params)
    return result
  }

  static async list(params = {}) {
    const url = `${this.baseUrl}/Demand/getList`
    const result = await this.post(url, params)
    return result
  }

  static async add(params = {}) {
    const url = `${this.baseUrl}/Demand/Add`
    const result = await this.post(url, params)
    return result
  }

  static async remove(id) {
    const url = `${this.baseUrl}/Demand/Remove`
    const result = await this.post(url, {
      id
    })
    return result
  }

  static async increateDemandCount(id) {
    const url = `${this.baseUrl}/Demand/IncreateDemandCount`
    const result = await this.post(url, {
      id
    })
    return result
  }

  static async addFollow(id) {
    const url = `${this.baseUrl}/Demand/AddFollow`
    const result = await this.post(url, {
      id
    })
    return result
  }

  static async removeFollow(id) {
    const url = `${this.baseUrl}/Demand/RemoveFollow`
    const result = await this.post(url, {
      id
    })
    return result
  }

  static async addInterested(id) {
    const url = `${this.baseUrl}/Demand/AddInterested`
    const result = await this.post(url, {
      id
    })
    return result
  }

  static async removeInterested(id) {
    const url = `${this.baseUrl}/Demand/RemoveInterested`
    const result = await this.post(url, {
      id
    })
    return result
  }

  static async addOrUpdateUserInfo(name, mobile, code) {
    const url = `${this.baseUrl}/Demand/AddOrUpdateUserInfo`
    const result = await this.post(url, {
      name,
      mobile,
      code
    })
    return result
  }

  static async addPrice(price, demandId) {
    const url = `${this.baseUrl}/Demand/AddPrice`
    const result = await this.post(url, {
      price,
      demandId
    })
    return result
  }

  // 新增一条留言
  static async PublishMessage(postId, commentId, text) {
    const url = `${this.baseUrl}/Demand/PublishMessage`
    const result = await this.post(url, {
      postId,
      commentId,
      text
    })
    return result
  }

  // 旧获取留言列表
  static async GetMessageList(demandId, page) {
    const url = `${this.baseUrl}/Demand/GetMessageList`
    const result = await this.get(url, {
      demandId,
      page
    })
    return result
  }

  // 获取留言列表新的
  static async GetMessageReplyList(demandId, page) {
    const url = `${this.baseUrl}/Demand/GetMessageReplyList`
    const result = await this.get(url, {
      demandId,
      page
    })
    return result
  }

  // 删除留言
  static async DeleteMessage(messageId) {
    const url = `${this.baseUrl}/Demand/DeleteMessage`
    const result = await this.post(url, {
      messageId
    })
    return result
  }

  // 获取回复的列表
  static async getCommentList(messageId, page) {
    const url = `${this.baseUrl}/Demand/GetReplyDetail`
    const result = await this.get(url, {
      messageId,
      page
    })
    return result
  }

  // 获取全部评论
  static async relateToMe(page) {
    const url = `${this.baseUrl}/Demand/RelateToMe`
    const result = await this.get(url, {
      page
    })
    return result
  }

   // 获取验证码
  static async getCode(mobile) {
    const url = `${this.baseUrl}/Demand/SendVerificationCode`
    const result = await this.get(url, {
      mobile
    })
    return result
  }

  static async uploadImg(files) {
    let promises = []
    const url = `${this.baseUrl}/Demand/UploadImg`
    files.map(function (item) {
      let promise = new Promise((resolve, reject) => {
        wx.uploadFile({
          url: url,
          filePath: item,
          name: 'file',
          success: function (res) {
            resolve(JSON.parse(res.data).src)
          }
        })
      })
      promises.push(promise)
    })
    return Promise.all(promises)
  }
}