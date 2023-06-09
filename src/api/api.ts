/*
 * @Author: TQtong 2733707740@qq.com
 * @Date: 2023-04-11 09:52:06
 * @LastEditors: TQtong 2733707740@qq.com
 * @LastEditTime: 2023-04-11 10:06:16
 * @FilePath: \echarts-map-demo\src\api\api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/util/request' // 引入封装的axios实例
// 获取本地json数据
export const getJsonDataApi = () => {
  return request({
    url: 'data/nanjing.json', // json文件地址
    method: 'GET'
  })
}
