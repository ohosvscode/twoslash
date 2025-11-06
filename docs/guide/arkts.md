# ArkTS Support

```ets twoslash
import { ArcList, ArcListAttribute, ArcListItem } from '@kit.ArkUI'

function add(a: number, b: number): number {
  return a + b;
}

add(1, 3);

@interface MyDecorator {
  /**
   * @description The value of the decorator
   * @default "hello"
   */
  value: string = "hello";
}

@MyDecorator({ value: "hello" })
class MyClass {
  value: string = "hello";
}

@Entry
@Component
struct Index {
  build() {
    Column() {
      ArcList() {
        ArcListItem() {
          Text("Hello")
        }
      }.width(100).height(100)
    }.width(100)
  }
}
```
