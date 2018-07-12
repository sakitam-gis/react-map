---
order: 0
chinese: logo 聚集与散开
english: logoGather
image: https://zos.alipayobjects.com/rmsportal/YsRZqQwpiAVgWrX.png
---

以圆点散开与聚集来展示 logo 的一个小动画

---

首页 logo 动画的实现代码, 提供三个logo的样式， 还可自已添加 logo，如果需定制个性化的东西，请在 LogoGather 里修改。

图片默认尺寸为 300 * 300;

图片取点像素为控制点的个数，以图片宽度除以像素点来决定点的个数, 默认为 20, 每行每排为15个取点。


```jsx harmony
import Input from 'antd/lib/input';

class LogoGather extends React.Component {
  render() {
    return (
      <div className="logo-gather-demo-wrapper">112</div>
    );
  }
}
class Edit extends React.Component {
  render() {
    return (<div>测试</div>);
  }
}
ReactDOM.render(
  <Edit />
, mountNode);
```
```css
.logo-gather-demo-edit-wrapper {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #f1f1f1;
  padding: 0 5%;
  line-height: 45px;
}

.logo-gather-demo-edit-wrapper ul {
  display: block;
  width: 100%;
  overflow: hidden;
}

.logo-gather-demo-edit-wrapper ul li:first-child {
  margin-left: 0;
}

.logo-gather-demo-edit-wrapper ul li {
  float: left;
  vertical-align: middle;
  margin: 0 5px;
}

.logo-gather-demo-wrapper {
  position: relative;
  background: #019BF0;
  overflow: hidden;
  height: 500px;
}

.logo-gather-demo-wrapper .point-wrapper {
  position: absolute;
}

.logo-gather-demo-wrapper .point {
  border-radius: 100%;
}

.logo-gather-demo-wrapper .right-side {
  width: 300px;
  height: 360px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.logo-gather-demo-wrapper .right-side * {
  pointer-events: none;
}

@media screen and (max-width: 414px) {
  .exhibition-details-demo {
    overflow: hidden;
  }

  .logo-gather-demo-edit-wrapper {
    transform: translateY(100%);
    transition: transform .45s ease-in-out;
  }

  .logo-gather-demo-edit-wrapper.open{
    transform: translateY(0);
  }

  .logo-gather-demo-edit-wrapper .anticon-down{
    transition: transform .45s ease-in-out;
  }

  .logo-gather-demo-edit-wrapper.open .anticon-down{
    transform: rotate(180deg);
  }

  .logo-gather-demo-edit-wrapper > div {
    width: 90%;
    line-height: 24px !important;
    margin-bottom: 5px;
  }

  .exhibition-details-demo .edit-button{
    position: absolute;
    top: -20px;
    width: 30px;
    height: 20px;
    border-radius: 30px 30px 0 0;
    background: #f1f1f1;
    text-align: center;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.15);
  }

  .logo-gather-demo-edit-wrapper ul {
    margin: 5px auto;
  }

  .phone-float-none {
    clear: both;
    margin-left: 0 !important;
  }

  .none {
    display: none;
  }

}

```
