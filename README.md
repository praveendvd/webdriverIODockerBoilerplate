# webdriverIODockerBoilerplate

Running wdio from docker

clone the repo and run

```
docker build -t mywdiocontainer . --progress=plain
docker run --name wdioRun1 mywdiocontainer
docker cp wdioRun1:wdioExample/allure-results .
docker rm wdioRun1
```
