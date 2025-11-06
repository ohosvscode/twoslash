# ArkTS Support

```ets twoslash
import { ArcList, ArcListAttribute } from '@kit.ArkUI'

function add(a: number, b: number): number {
  return a + b;
}

add(1, 3);

@interface Hello {
  value: string = "hello";
}

@Component
struct Index {
  build() {
    Column() {
      ArcList() {

      }.width(100).height(100)
    }.width(100)
  }
}
```
