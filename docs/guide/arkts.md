# ArkTS Support

This page using to test the ArkTS support of Twoslash.

```ets twoslash
import { ArcList, ArcListAttribute, ArcListItem } from '@kit.ArkUI'

// Plain function
function add(a: number, b: number): number {
  return a + b;
}

add(1, 3);

// ArkTS API20 @interface style decorator support
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

// Struct component support
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
