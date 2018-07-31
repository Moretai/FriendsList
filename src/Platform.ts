/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
declare interface Platform {
    getUserInfo(): Promise<any>;
    login(): Promise<any>
    //转发菜单
    showShareMenu(): Promise<any>;
    //主动分享的按钮事件
    shareAppMessage():Promise<any>;
    //微信好友圈
    createGameClubButton():Promise<any>;
    //微信广告
    createBannerAd():Promise<any>;
    //小程序二维码
    post():Promise<any>;
}

class DebugPlatform implements Platform {
    async getUserInfo() {
        return { nickName: "username" }
    }
    async login() {

    }
    //被动分享
    async showShareMenu() {

    }
    //打开主动分享
    async shareAppMessage() {
        
    }
    //游戏圈
    async createGameClubButton() {

    } 
    //广告
    async createBannerAd() {

    }
    //小程序码
    async post() {
        
    }

}


if (!window.platform) {
    window.platform = new DebugPlatform();
}



declare let platform: Platform;

declare interface Window {

    platform: Platform
}





