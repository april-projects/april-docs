# 常用编程技巧和代码规范总结

## 一、前言

>  `April`（四月） 是以我的猫咪命名的一个开源团队，创立初衷是为了孵化一些项目到社区，意味着后续也会接受来自其他代码贡献者的代码，但是如果代码贡献者的编程风格与 `April `的不一致，会给代码阅读者和其他代码提交者造成不小的困扰. `April`因此总结了这份编程风格指南, 使所有提交代码的人都能获知 `April` 的编程风格.

## 二、Java 编码规范

 `Java `编程规范主要以阿里巴巴代码规约为主 ( `GitHub `无法预览 `PDF`，可以 `clone `本仓库，使用 `typora `可以以 `PDF `方式查看下面的文档)



<iframe src="https://tencent.cos.mobaijun.com/img/gitbook/codestyle/Java开发手册(黄山版).pdf" frameborder="0" scrolling="no" width="100%" height="800"></iframe>

## 三、编程技巧（补充）

### 一、注释规范

* 禁用行尾注释
* 方法或常量，成员变量，禁单行注释，应使用文档注释

#### 注释配置

> `File | Settings | Editor | File and Code Templates`，依次配置 `Files `下面的 `Class interface enum record @interface`

* 类注释模板

```velocity
#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME};#end
#parse("File Header.java")

/**
 * Description: [${END}]
 * Author: [mobaijun]
 * Date: [${DATE} ${TIME}]
 * IntelliJ IDEA Version: [$PRODUCT_NAME 2023.1.4]
*/
public class ${NAME} {
}
```

* 枚举注释模板

```velocity
#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME};#end
#parse("File Header.java")

/**
 * Description: [${END}]
 * Author: [mobaijun]
 * Date: [${DATE} ${TIME}]
 * IntelliJ IDEA Version: [$PRODUCT_NAME 2023.1.4]
*/
public enum ${NAME} {
}
```

* 接口注释模板

```velocity
#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME};#end
#parse("File Header.java")

/**
 * Description: [${END}]
 * Author: [mobaijun]
 * Date: [${DATE} ${TIME}]
 * IntelliJ IDEA Version: [$PRODUCT_NAME 2023.1.4]
*/
public interface ${NAME} {
}
```

* 注解注释模板

```velocity
#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME};#end
#parse("File Header.java")

/**
 * Description: [${END}]
 * Author: [mobaijun]
 * Date: [${DATE} ${TIME}]
 * IntelliJ IDEA Version: [$PRODUCT_NAME 2023.1.4]
*/
public @interface ${NAME} {
}
```

* 安全类

~~~velocity
#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME};#end
#parse("File Header.java")

/**
 * Description: [${END}]
 * Author: [mobaijun]
 * Date: [${DATE} ${TIME}]
 * IntelliJ IDEA Version: [$PRODUCT_NAME 2023.1.4]
*/
public record ${NAME}() {
}
~~~

***

### 二、建表规范

* 遵循三大范式
* 复杂字段之间用 （\_） 下划线相隔，如（`create\_time`，`user_name`）
* 禁止使用外键关联
* 主键字段使用（`bigint`）类型，`Java `对应类型使用 `Long `类型
* 日期类型字段是 （`datetime`），`Java`对应 `LocalDateTime `类型

***

### 三、查询规范

* 列表查询

> 所有的列表查询都需要添加排序，已最后添加的数据显示在第一列，以 `date_time `类型作为排序字段，如（创建时间`create_time` ）

* 操作集合尽量使用 `stream `和 `lambda `表达式,工具类地址（`com.mobaijun.common.collection.StreamUtil`）

***

### 四、返回规范

> * 项目中定义了`R`返回类，目录地址（`com.mobaijun.common.result`）
>   * R.ok(T) 成功返回
>   * R.ok(T data, String message) 成功返回自定义消息
>   * R.failed(HttpStatus failMsg); 失败返回自定义状态码
>   * R.failed(HttpStatus failMsg, String message); 失败返回自定义状态码和自定义消息
>   
>   返回示例：
>   ~~~json
>   成功返回
>   {
>       "code": 200,
>       "message":"成功返回！",
>       "data":{
>           "key":"1",
>           "value":"2"
>       }
>   }
>   失败返回
>   {
>       "code": 20004,
>       "message":"失败返回！",
>       "data":{null}
>   }
>   ~~~
>   
>   
> * 项目中返回只能在 `controller `层进行操作，禁止在业务层（`service`）返回
> * 业务层如果需要异常处理，使用 `throw new Exception("")` 进行处理;

***

### 五、增删改查返回规范

* 新增：返回 boolean 类型或对象
* 修改：返回 boolean 类型或对象
* 删除：返回 int 类型
* 查询：返回 List 类型或 Entity 类型
* 批量：返回 int 类型

***

### 六、接口规范

* 类定义信息为 @Api(tags = {"一级目录-二级目录-业务类型"}, description = "具体描述")
* 查询使用：@GetMapping(value = "/${methodName}")
* 新增使用：@PostMapping(value = "/${methodName}")
* 修改使用：@PutMapping(value = "/${methodName}")
* 单个删除：@DeleteMapping(value = "/${methodName}")
* 批量删除：@DeleteMapping(value = "/${methodName}")

> 命名规则：
>
> * 单个删除（singleDelete）
> * 批量删除（batchDelete）
> * 新增 （insert\[Entity]）
> * 修改 （update\[Entity]）
> * 查询 （select\[Entity]List）

***

### 七、枚举定义规范

1. 枚举如果没有`set`方法，属性需要使用 `final `定义；
2. 枚举每个字段需包含文档注释
3. 枚举属性全部定义为大写，多个单纯之间以下划线分割

```java
@Getter
@AllArgsConstructor
public enum NameType {
    /**
     * 名称
     */
    FACTORY_NAME("name");
    
    /**
     * 值
     */
    private final String value;
}
```

***

### 八、编码技巧

#### 成员变量

* 成员变量禁用 `idea `告警关键字，例如
  * `width、height`

#### 异常处理

> 如遇到多资源关闭应使用（`try-with-resources`）语法

* 参考链接[传送地址](https://www.jianshu.com/p/258c5ce1a2bd)

```java
// 代码示例
public void readFile() throws FileNotFoundException {
    try (FileReader fr = new FileReader("d:/input.txt");BufferedReader br = new BufferedReader(fr)) {
        String s = "";
        while ((s = br.readLine()) != null) {
            System.out.println(s);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

#### 工具类使用：

非必要不新增工具类，以 `kjs-common` 包工具类为准，大多数场景已经可以完全应付

```xml
<!--引入示例-->
<dependency>
    <groupId>com.mobaijun</groupId>
    <artifactId>kjs-common</artifactId>
    <version>${latest version}</version>
</dependency>
```

* 依赖关系图

![1](https://tencent.cos.mobaijun.com/img/gitbook/codestyle/1.png)

#### 集合处理

集合处理使用 `Java 8` 新特性 `lambda `结合 `Stream `操作，例如：

```java
public static void writeWallpaper(List<WallpaperData> wallpaperDataList) throws IOException {
    if (!Files.exists(WALLPAPER_PATH)) {
        Files.createFile(WALLPAPER_PATH);
    }
    // 扫描本地文件
    List<WallpaperData> data = readWallpaperData();
    if (CollUtil.isNotEmpty(data)) {
        wallpaperDataList.addAll(data);
    }
    // 排序
    List<WallpaperData> collect = wallpaperDataList.stream()
            // 倒序,最新日期排前面
            .sorted(Comparator.comparing(WallpaperData::getCreatedAt).reversed())
            .collect(Collectors.toList());
    Files.write(WALLPAPER_PATH, "## Wallpaper".getBytes());
    Files.write(WALLPAPER_PATH, System.lineSeparator().getBytes(), StandardOpenOption.APPEND);
    collect.forEach(wallpaperData -> {
        try {
            Files.write(WALLPAPER_PATH, wallpaperData.formatMarkdown().getBytes(), StandardOpenOption.APPEND);
            Files.write(WALLPAPER_PATH, System.lineSeparator().getBytes(), StandardOpenOption.APPEND);
            Files.write(WALLPAPER_PATH, System.lineSeparator().getBytes(), StandardOpenOption.APPEND);
        } catch (IOException e) {
            log.error(e.getMessage(), "Failed to write wallpaper.md file");
        }
    });
}
```

> 上方代码来自 [april-wallpaper](https://github.com/april-projects/april-wallpaper/blob/ecdfa138c681d93f6c7ee780a7232c192d7d4726/src/main/java/com/mobaijun/util/FileUtils.java) 项目

#### 对象实体转换

对象之间的属性赋值应该使用 `mapstruct `进行转换，示例代码：

```java
@PostMapping("/insertMarketIndex")
public AbstractTip<Integer> insertMarketIndex(@Validated MarketIndexDTO dto) {
    if (ObjectUtils.isEmpty(dto)) {
        return new ErrorTip<>("The data is null , abnormal, burst out NullPointerException");
    }
    return new SuccessTip<>(marketIndexService.insertMarketIndex(MarketIndexConverter.INSTANCE.toDto(dto)));
}
```

***

## 四、代码提交

### idea 忽略文件：

> File | Settings | Editor | File Types
>
> 忽略掉 |*.iml |.idea |.mvn |.mvnw |mvnw |mvnw.cmd |target

### 提交规范

 主要以 `GitMoji `规范为主，[gitmoji](https://gitmoji.carloscuesta.me/) 是一个标准化和解释在`GitHub`提交消息上使用 [emoji](https://gitmoji.carloscuesta.me/) 的倡议。 [gitmoji](https://gitmoji.carloscuesta.me/) 是一个开源项目，专门规定了在 `github` 提交代码时应当遵循的 `emoji` 规范，在 `git commit`上使用 `emoji` 提供了一种简单的方法，仅通过查看所使用的表情符号来确定提交的目的或意图。

 在执行 `git commit` 指令时使用 `emoji` 图标为本次提交添加一个特别的图标， 这个本次提交的记录很容易突出重点，或者说光看图标就知道本次提交的目的。这样就方便在日后查看历史提交日子记录中快速的查找到对于的提交版本。由于有很多不同的表情符号，表情库更新后，没有一个可以帮助更轻松地使用表情符号的中文表情库列表。

 提交示例，图标地址[传送门](https://gitmoji.dev/)

![](https://tencent.cos.mobaijun.com/img/gitbook/codestyle/2.png)
