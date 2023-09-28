<template>
    <button type="button" class="layui-btn" :id="name">
        <i class="layui-icon layui-icon-upload"></i> 文件上传
    </button>
</template>
<script>
import { onMounted, getCurrentInstance, defineProps, ref, nextTick } from "vue"

export default {
    setup: function (props, context) {

        const that = getCurrentInstance().proxy;

        const attrs = context.attrs;
        const emits = context.emit;

        const uuidv1 = uuid().replace(/-/g, '');
        const id = "id" + uuidv1
        const name = "name" + uuidv1
        const filter = "name" + uuidv1

        let uploadObject = null;

        onMounted(() => {
            layui.use(function () {
                var upload = layui.upload;
                var layer = layui.layer;
                var element = layui.element;
                var $ = layui.$;
                uploadObject = upload.render({
                    elem: '#' + name,
                    auto: attrs["auto"] || false,
                    url: attrs["url"] || 'https://httpbin.org/post', // 此处用的是第三方的 http 请求演示，实际使用时改成您自己的上传接口即可。
                    accept: attrs["accept"] || "file",
                    before: function (obj) {
                        // 预读本地文件示例，不支持ie8
                        // obj.preview(function (index, file, result) {
                        //     $('#ID-upload-demo-img').attr('src', result); // 图片链接（base64）
                        // });

                        //element.progress('filter-demo', '0%'); // 进度条复位
                        //layer.msg('上传中', { icon: 16, time: 0 });
                    },
                    choose: function (obj) {
                        obj.preview(function (index, file, result) {
                            console.log(file)
                            console.log(result)
                        })
                    },
                    done: function (res) {
                        // 若上传失败
                        // if (res.code > 0) {
                        //     return layer.msg('上传失败');
                        // }
                        // 上传成功的一些操作
                        // …
                        //$('#ID-upload-demo-text').html(''); // 置空上传失败的状态
                    },
                    error: function () {
                        // 演示失败状态，并实现重传
                        // var demoText = $('#ID-upload-demo-text');
                        // demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
                        // demoText.find('.demo-reload').on('click', function () {
                        //     uploadInst.upload();
                        // });
                    },
                    // 进度条
                    progress: function (n, elem, e) {
                        // element.progress('filter-demo', n + '%'); // 可配合 layui 进度条元素使用
                        // if (n == 100) {
                        //     layer.msg('上传完毕', { icon: 1 });
                        // }
                    }
                });

            })


        })

        const upload = () => {
            uploadObject.upload();
        }

        return {
            that,
            attrs,
            emits,
            upload,
            name
        }
    }
}
</script>