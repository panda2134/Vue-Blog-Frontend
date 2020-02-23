import message from 'element-ui/lib/message'

export default function({ $axios }) {
    $axios.onResponseError(error => {
        if(error.response.status >= 500) {
            message.error('服务器错误: ' + error.response.status)
        }
    })
    $axios.onRequestError(error => {
        message.error('请求错误：' + error)
    })
}