# admission-system

一个用于新人确认加入社团的小网页。

- 前端分支：web  
  启动方法：
  
  ```shell
  docker run -d \
                    --restart=unless-stopped \
                    -e TZ=Asia/Shanghai \
                    --name admission-system-web \
                    seeleclover/admission-system:web-1.0.0
  ```

- 后端分支：service-api  
  启动方法：

  ```shell
  docker run -d \
                    --restart=unless-stopped \
                    -e TZ=Asia/Shanghai \
                    -v /data/admission-system/service-api/production.json:/app/config/production.json \
                    --name admission-system-service-api \
                    seeleclover/admission-system:service-api-1.0.0
  ```
