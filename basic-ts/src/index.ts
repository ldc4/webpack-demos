import './css/reset.css';
import './css/iconfont.css';
import './css/style.less';


function debounce(fn: Function, time: number): any {
    let timeout: NodeJS.Timer = null;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(this, args);
      }, time);
    };
}


setTimeout(() => {
  document.getElementsByClassName('content')[0].addEventListener('mouseover', debounce(() => {
    console.log('哟');
  }, 500));
}, 1000);